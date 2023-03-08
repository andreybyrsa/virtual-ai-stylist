import classNames from 'classnames'

import Icon from '@Components/Icon'
import IconButtonProps from '@Components/IconButton/Iconbutton.types'

import './Iconbutton.scss'

function IconButton({
  className,
  onClick,
  viewBox,
  type = 'primary',
  iconName = 'house',
  disabled = false,
}: IconButtonProps) {
  const IconButtonClassName = classNames(
    'icon-button',
    `icon-button--${type}`,
    { 'icon-button--disabled': disabled },
    className,
  )
  return (
    <button
      className={IconButtonClassName}
      onClick={onClick}
      type="button"
      disabled={disabled}
    >
      <Icon
        className="icon__button"
        viewBox={viewBox}
        iconName={iconName}
        color="color-icon-primary"
        size={30}
      />
    </button>
  )
}

export default IconButton
