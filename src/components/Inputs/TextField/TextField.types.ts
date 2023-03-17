import React, { InputHTMLAttributes, SetStateAction } from 'react'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  type?: 'primary' | 'secondary'

  setValue?: React.Dispatch<SetStateAction<string>>
}

export default TextFieldProps
