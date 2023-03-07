import classNames from 'classnames'

import Typography from '@Components/Typography'

import './Button.scss'
import ButtonProps from './Button.types'

function Button({ className, type, disabled = false, children = 'Кнопка', onClick }: ButtonProps) {
  const ButtonClassName = classNames(
    'button',
    `button--${type}`,
    {
      'button--disabled': disabled,
    },
    className,
  )

  return (
    <button
      className={ButtonClassName}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      <Typography
        variant="text-t5-medium"
        className="button__text"
      >
        {children}
      </Typography>
    </button>
  )
}

export default Button
