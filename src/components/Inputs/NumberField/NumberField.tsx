import classNames from 'classnames'
import { useForm } from 'react-hook-form'

import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import './NumberField.scss'
import NumberFieldProps from './NumberField.types'

function NumberField({
  className,

  label,
  placeholder = 'Введите проверочный код',

  required,
  maxLength = 4,
  minLength = 4,
}: NumberFieldProps) {
  const {
    register,
    formState: { errors },
    getValues,
  } = useForm({ mode: 'onChange' })

  const isRequired = errors?.numberField?.type === 'required'

  const NumberFieldClassName = classNames(
    'number-field',
    {
      'number-field--required': isRequired,
    },
    className,
  )

  const getCurrentIconName = (error: string) => {
    if (isRequired) {
      return 'xMark'
    }
    if (!getValues('numberField')) {
      return 'empty'
    }
    return error !== 'undefined' ? 'xMark' : 'check'
  }

  return (
    <div className="number-field-wrapper">
      {label && (
        <Typography
          className="number-field-label"
          variant="title-t4-medium"
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
          })}
        />
        <Icon
          className="number-field__icon"
          iconName={getCurrentIconName(`${errors?.numberField?.type}`)}
          color={errors?.numberField ? 'color-icon-error' : 'color-icon-correct'}
        />
      </div>
    </div>
  )
}

export default NumberField
