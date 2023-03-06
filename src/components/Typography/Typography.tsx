import classNames from 'classnames'
import React from 'react'

import './Typography.scss'
import TypographyProps from './Typography.types'

function Typography({ className, children, variant = 'text-t1-regular', color }: TypographyProps) {
  const TypographyClassName = classNames('typography', `typography--${variant}`, className)
  const typographyStyle: React.CSSProperties = {}

  if (color) {
    typographyStyle.color = `var(--${color})`
  }

  return (
    <p
      className={TypographyClassName}
      style={typographyStyle}
    >
      {children}
    </p>
  )
}

export default Typography
