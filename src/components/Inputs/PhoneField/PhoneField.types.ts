import React, { InputHTMLAttributes, SetStateAction } from 'react'

interface PhoneFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string

  setCurrentValue?: React.Dispatch<SetStateAction<string>>
}

export default PhoneFieldProps
