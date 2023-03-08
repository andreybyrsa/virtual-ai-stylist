import classNames from 'classnames'

import './Footer.scss'
import FooterProps from './Footer.types'

function Footer({ className, children }: FooterProps) {
  const FooterClassName = classNames('footer', className)
  return <Footer className={FooterClassName}>{children}</Footer>
}

export default Footer
