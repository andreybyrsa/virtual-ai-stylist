import React, { MouseEventHandler } from 'react'

interface CellProps {
  className?: string

  text?: string
  title?: string
  subtitle?: string

  onClick?: MouseEventHandler

  before?: React.ReactNode
  after?: React.ReactNode

  disabled?: boolean
}

export default CellProps
