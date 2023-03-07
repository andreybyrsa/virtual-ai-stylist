import classNames from 'classnames'
import { ChangeEvent, useEffect, useState } from 'react'

import Typography from '@Components/Typography'

import './TextField.scss'
import TextFieldProps from './TextField.types'

function TextField({
  className,

  value,
  setValue,

  label,
  placeholder = 'Введите текст',
  required,
}: TextFieldProps) {
  const [isRequired, setIsRequired] = useState<boolean>(!!required)

  const TextFieldClassName = classNames(
    'input',
    {
      'input--required': isRequired,
    },
    className,
  )

  const onHandlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value)
    }
  }

  useEffect(() => {
    if (!value && required) {
      setIsRequired(true)
    } else {
      setIsRequired(false)
    }
  }, [required, value])

  return (
    <div className="input-wrapper">
      {label && (
        <Typography
          className="input-text"
          variant="title-t4-medium"
        >
          {label}
        </Typography>
      )}
      <input
        className={TextFieldClassName}
        value={value}
        onChange={onHandlerChange}
        placeholder={placeholder}
        type="text"
      />
    </div>
  )
}

export default TextField
