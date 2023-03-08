import classnames from 'classnames'

import './Header.scss'
import HeaderProps from './Header.types'

function Header({ className, children }: HeaderProps) {
  const HeaderClassname = classnames('header', className)
  return <header className={HeaderClassname}>{children}</header>
}

export default Header
