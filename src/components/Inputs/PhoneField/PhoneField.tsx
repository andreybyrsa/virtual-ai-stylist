import classNames from 'classnames'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import getCurrentValidationIcon from '@Utils/getCurrentValidationIcon'
import getPhoneMaskPattern from '@Utils/getPhoneMaskPattern'

import { FormsTypes } from '@Types/Forms.types'

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
  } = useForm<FormsTypes>({ mode: 'onChange' })
  const [currentPhone, setCurrentPhone] = useState<string>('+7')
  const [isRequired, setIsRequired] = useState<boolean>(false)

  const PhoneFieldClassName = classNames(
    'phone-field',
    {
      'phone-field--required': isRequired && !!required,
    },
    className,
  )

  useEffect(() => {
    getPhoneMaskPattern(currentPhone, setValue)
  }, [currentPhone, setValue])

  const validatePhoneRegPattern = (value: string) => {
    const currentPhoneValue = value.replaceAll(/[ \-()+]/g, '')
    return /^(\+7|7|8)?\(?[489][0-9]{2}\)?[0-9]{3}?[0-9]{2}?[0-9]{2}$/.test(currentPhoneValue)
  }

  const onHandlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentEventValue = event.target.value.replaceAll(/[ \-()]/g, '')
    if (currentEventValue === '+' || !currentEventValue) {
      setValue('phoneField', '+7')
      return
    }
    if (currentEventValue.length > currentPhone.length) {
      setCurrentPhone((prevState) => prevState + currentEventValue.slice(-1))
      setIsRequired(false)
    } else {
      setCurrentPhone((prevState) => prevState.slice(0, prevState.length - 1))
      if (currentPhone.length === 3) setIsRequired((prevState) => !prevState)
    }
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
          placeholder={placeholder}
          type="tel"
          {...register('phoneField', {
            required: !!required,
            validate: validatePhoneRegPattern,
            minLength: 11,
            onChange: onHandlerChange,
          })}
        />
        <Icon
          className="phone-field__icon"
          iconName={getCurrentValidationIcon(
            'phoneField',
            `${errors?.phoneField?.type}`,
            isRequired,
            getValues,
          )}
          color={errors?.phoneField ? 'color-icon-error' : 'color-icon-correct'}
        />
      </div>
    </div>
  )
}

export default PhoneField
