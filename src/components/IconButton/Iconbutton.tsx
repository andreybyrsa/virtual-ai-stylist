import classNames from 'classnames'

import IconButtonProps from '@Components/IconButton/Iconbutton.types'

import './Iconbutton.scss'

function IconButton({ className, onClick, children, type }: IconButtonProps) {
  const IconButtonClassName = classNames('IconButton', `button--${type}`, className)
  return (
    <IconButton
      className={IconButtonClassName}
      onClick={onClick}
    >
      {children}
    </IconButton>
  )
}

export default IconButton
