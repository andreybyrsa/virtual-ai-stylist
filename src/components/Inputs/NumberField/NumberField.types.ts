import { InputHTMLAttributes } from 'react'

interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string

  isPhoneField?: boolean
}

export default NumberFieldProps
