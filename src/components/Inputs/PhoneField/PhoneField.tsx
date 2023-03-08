import classNames from 'classnames'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import './PhoneField.scss'
import PhoneFieldProps from './PhoneField.types'

function PhoneField({
  className,

  label,
  placeholder = 'Введите номер телефона',

  required,
}: PhoneFieldProps) {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
  } = useForm({ mode: 'onChange' })

  const isRequired = errors?.phoneField?.type === 'required'

  const PhoneFieldClassName = classNames(
    'phone-field',
    {
      'phone-field--required': isRequired,
    },
    className,
  )

  useEffect(() => {
    if (!getValues('phoneField')) {
      setValue('phoneField', '+7')
    }
  }, [getValues, setValue])

  useEffect(() => {
    if (!errors?.phoneField && getValues('phoneField').length >= 11) {
      const phoneValue: string = [...getValues('phoneField')]
        .reverse()
        .map((elem, index) => (index < 10 ? elem : ''))
        .reverse()
        .join('')

      let maskPattern = '+7 (***)-***-**-**'

      for (let i = 0; i < 10; i++) {
        maskPattern = maskPattern.replace('*', phoneValue[i])
      }
      setValue('phoneField', maskPattern)
    }
  })

  const onFocusHandler = () => {
    if (!getValues('phoneField')) {
      setValue('phoneField', '+7')
    }
  }

  const getCurrentIconName = (error: string) => {
    if (isRequired) {
      return 'xMark'
    }
    if (!getValues('phoneField')) {
      return 'empty'
    }
    return error !== 'undefined' ? 'xMark' : 'check'
  }

  return (
    <div className="phone-field-wrapper">
      {label && (
        <Typography
          className="phone-field-label"
          variant="title-t4-medium"
        >
          {label}
        </Typography>
      )}
      <div className={PhoneFieldClassName}>
        <input
          className="phone-field__input"
          onFocus={onFocusHandler}
          placeholder={placeholder}
          type="tel"
          {...register('phoneField', {
            required: !!required,
            pattern: /^(\+7|7|8)?\(?[489][0-9]{2}\)?[0-9]{3}?[0-9]{2}?[0-9]{2}$/,
            minLength: 11,
          })}
        />
        <Icon
          className="phone-field__icon"
          iconName={getCurrentIconName(`${errors?.phoneField?.type}`)}
          color={errors?.phoneField ? 'color-icon-error' : 'color-icon-correct'}
        />
      </div>
    </div>
  )
}

export default PhoneField
