import classnames from 'classnames'

import './Header.scss'
import HeaderProps from './Header.types'

function Header({ className, LeftSideSlot, RightSideSlot }: HeaderProps) {
  const HeaderClassName = classnames('header', className)
  return (
    <header className={HeaderClassName}>
      <div className="header__leftSideSlot">{LeftSideSlot}</div>
      <div className="header__rightSideSlot">{RightSideSlot}</div>
    </header>
  )
}

export default Header
