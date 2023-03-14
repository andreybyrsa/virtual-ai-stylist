import classNames from 'classnames'
import { useForm } from 'react-hook-form'

import Typography from '@Components/Typography'

import { FormsTypes } from '@Types/Forms.types'

import './TextField.scss'
import TextFieldProps from './TextField.types'

function TextField({
  className,

  label,
  placeholder = 'Введите текст',

  required,
  maxLength = 15,
  minLength = 2,
}: TextFieldProps) {
  const {
    register,
    formState: { errors },
  } = useForm<FormsTypes>({ mode: 'onChange' })

  const isRequired = errors?.textField?.type === 'required'

  const TextFieldClassName = classNames(
    'text-field',
    {
      'text-field--required': isRequired,
    },
    className,
  )

  const getCurrentErrorMessage = (error: string) => {
    return error === 'pattern'
      ? 'Вы ввели некорректную форму'
      : error === 'maxLength'
      ? `Длина должна быть меньше ${maxLength} символов`
      : error === 'minLength'
      ? `Длина должна быть больше ${minLength} символов`
      : 'Форма обязательна к заполнению'
  }

  return (
    <div className="text-field-wrapper">
      {label && (
        <Typography
          className="text-field-label"
          variant="title-t3-medium"
        >
          {label}
        </Typography>
      )}
      <input
        className={TextFieldClassName}
        placeholder={placeholder}
        type="text"
        {...register('textField', {
          required: !!required,
          pattern: /^[a-zA-Z][a-zA-Z0-9]*[._-]?[a-zA-Z0-9]+$/,
          maxLength: maxLength,
          minLength: minLength,
        })}
      />
      {errors?.textField && (
        <Typography
          className="text-field-error"
          variant="text-t2-medium"
          color="color-text-error"
        >
          {getCurrentErrorMessage(errors?.textField?.type)}
        </Typography>
      )}
    </div>
  )
}

export default TextField
