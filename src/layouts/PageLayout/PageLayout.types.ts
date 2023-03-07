import React from 'react'

interface PageLayoutProps {
  className?: string
  headerClassName?: string
  contentClassName?: string
  footerClassName?: string

  header?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
}

export default PageLayoutProps
