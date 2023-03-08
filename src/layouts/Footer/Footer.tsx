import classNames from 'classnames'

import './Footer.scss'
import FooterProps from './Footer.types'

function Footer({ className, children, isNavigation }: FooterProps) {
  const FooterClassName = classNames('footer', { 'footer--navigation': isNavigation }, className)
  return <footer className={FooterClassName}>{children}</footer>
}

export default Footer
