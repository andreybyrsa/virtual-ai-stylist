import classNames from 'classnames'

import FooterProps from '@Layouts/footer/Footer.types'

import './Footer.scss'

function Footer({ className, children }: FooterProps) {
  const FooterClassName = classNames('Footer', className)
  return <Footer className={FooterClassName}>{children}</Footer>
}

export default Footer
