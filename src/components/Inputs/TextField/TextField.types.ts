import React, { InputHTMLAttributes, SetStateAction } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string

  setValue: React.Dispatch<SetStateAction<string>>

  label?: string
}

export default TextFieldProps
