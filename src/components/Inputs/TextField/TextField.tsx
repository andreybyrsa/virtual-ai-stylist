import classNames from 'classnames'
import { ChangeEvent } from 'react'

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
  const TextFieldClassName = classNames(
    'input',
    {
      'input--required': required,
    },
    className,
  )

  const onHandlerChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (setValue) {
      setValue(event.target.value)
    }
  }

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
