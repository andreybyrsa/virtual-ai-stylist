import classNames from 'classnames'

import Typography from '@Components/Typography'

import './Button.scss'
import ButtonProps from './Button.types'

function Button({
  className,
  type = 'primary',

  children = 'Кнопка',
  onClick,
}: ButtonProps) {
  const ButtonClassName = classNames('button', `button--${type}`, className)

  return (
    <button
      className={ButtonClassName}
      onClick={onClick}
      type="button"
    >
      <Typography className="button__text">{children}</Typography>
    </button>
  )
}

export default Button
