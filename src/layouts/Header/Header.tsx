import classnames from 'classnames'

import './Header.scss'
import HeaderProps from './Header.types'

function Header({ className, leftSideSlot, rightSideSlot }: HeaderProps) {
  const HeaderClassName = classnames('header', className)
  return (
    <header className={HeaderClassName}>
      <div className="header__left-side-slot">{leftSideSlot}</div>
      <div className="header__right-side-slot">{rightSideSlot}</div>
    </header>
  )
}

export default Header
