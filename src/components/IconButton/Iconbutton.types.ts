import React, { MouseEventHandler } from 'react'

interface IconButtonProps {
  className?: string

  type?: 'primary' | 'secondary'

  onClick?: MouseEventHandler

  children?: React.ReactNode
}

export default IconButtonProps
