import classNames from 'classnames'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'

import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import getCurrentValidationIcon from '@Utils/getCurrentValidationIcon'

import { FormsTypes } from '@Types/Forms.types'

import './NumberField.scss'
import NumberFieldProps from './NumberField.types'

function NumberField({
  className,

  label,
  placeholder = 'Введите проверочный код',

  setValue,

  required,
  maxLength = 4,
  minLength = 4,
}: NumberFieldProps) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm<FormsTypes>({ mode: 'onChange' })

  const isRequired = errors?.numberField?.type === 'required'

  const NumberFieldClassName = classNames(
    'number-field',
    {
      'number-field--required': isRequired,
    },
    className,
  )

  const onHandlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value)
    }
  }

  return (
    <div className="number-field-wrapper">
      {label && (
        <Typography
          className="number-field-label"
          variant="title-t3-medium"
        >
          {label}
        </Typography>
      )}
      <div className={NumberFieldClassName}>
        <input
          className="number-field__input"
          placeholder={placeholder}
          type="text"
          {...register('numberField', {
            required: !!required,
            pattern: /^[0-9]+$/,
            maxLength: maxLength,
            minLength: minLength,
            onChange: onHandlerChange,
          })}
        />
        <Icon
          className="number-field__icon"
          iconName={getCurrentValidationIcon(
            'numberField',
            `${errors?.numberField?.type}`,
            isRequired,
            getValues,
          )}
          color={errors?.numberField ? 'color-icon-error' : 'color-icon-correct'}
        />
      </div>
    </div>
  )
}

export default NumberField
