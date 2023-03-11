import classnames from 'classnames'

import './Header.scss'
import HeaderProps from './Header.types'

function Header({ className, LeftSideSlot, RightSideSlot }: HeaderProps) {
  const HeaderClassName = classnames('header', className)
  return (
    <header className={HeaderClassName}>
      <div className="header__left-side-slot">{LeftSideSlot}</div>
      <div className="header__right-side-slot">{RightSideSlot}</div>
    </header>
  )
}

export default Header
