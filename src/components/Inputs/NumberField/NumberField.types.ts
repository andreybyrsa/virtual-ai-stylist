import React, { InputHTMLAttributes, SetStateAction } from 'react'

interface NumberFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string

  setValue?: React.Dispatch<SetStateAction<string>>
}

export default NumberFieldProps
