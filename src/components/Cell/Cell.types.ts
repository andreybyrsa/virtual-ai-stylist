import { MouseEventHandler } from 'react'

interface CellProps {
  className?: string

  text?: string
  title?: string
  subtitle?: string

  onClick?: MouseEventHandler

  before?: boolean
  after?: boolean

  disabled?: boolean
}

export default CellProps
