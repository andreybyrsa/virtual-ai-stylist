import classNames from 'classnames'
import { useForm } from 'react-hook-form'

import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import './NumberField.scss'
import NumberFieldProps from './NumberField.types'

function NumberField({
  className,

  label,
  placeholder,

  required,
  maxLength = 4,
  minLength = 4,

  isPhoneField,
}: NumberFieldProps) {
  const {
    register,
    formState: { errors },
  } = useForm({ mode: 'onChange' })

  const isRequired = errors?.numberField?.type === 'required'
  const NumberFieldClassName = classNames(
    'number-field',
    {
      'number-field--required': isRequired,
    },
    className,
  )

  if (isPhoneField) {
    return <input />
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
      <input
        className={NumberFieldClassName}
        placeholder={placeholder}
        type="number"
        {...register('numberField', {
          required: !!required,
          maxLength: maxLength,
          minLength: minLength,
        })}
      />
      {errors?.numberField ? <Icon iconName="check" /> : <Icon iconName="check" />}
    </div>
  )
}

export default NumberField
