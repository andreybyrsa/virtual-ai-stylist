import { InputHTMLAttributes } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: 'primary' | 'secondary'
}

export default TextFieldProps
