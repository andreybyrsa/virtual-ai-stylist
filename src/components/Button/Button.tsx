import classNames from 'classnames'

import Typography from '@Components/Typography'

import './Button.scss'
import ButtonProps from './Button.types'

function Button({
  className,

  children = 'Кнопка',
  onClick,
}: ButtonProps) {
  const ButtonClassName = classNames('button', className)

  return (
    <button
      className={ButtonClassName}
      onClick={onClick}
      type="button"
    >
      <Typography>{children}</Typography>
    </button>
  )
}

export default Button
