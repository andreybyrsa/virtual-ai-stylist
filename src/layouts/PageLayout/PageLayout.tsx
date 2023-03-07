import classNames from 'classnames'

import './PageLayout.scss'
import PageLayoutProps from './PageLayout.types'

function PageLayout({
  className,
  headerClassName,
  contentClassName,
  footerClassName,

  header,
  children,
  footer,
}: PageLayoutProps) {
  const PageLayoutClassName = classNames('page-layout', className)
  const PageLayoutHeaderClassName = classNames('page-layout__header', headerClassName)
  const PageLayoutContentClassName = classNames('page-layout__content', contentClassName)
  const PageLayoutFooterClassName = classNames('page-layout__footer', footerClassName)

  return (
    <div className={PageLayoutClassName}>
      <div className={PageLayoutHeaderClassName}>{header}</div>
      <div className={PageLayoutContentClassName}>{children}</div>
      <div className={PageLayoutFooterClassName}>{footer}</div>
    </div>
  )
}

export default PageLayout
