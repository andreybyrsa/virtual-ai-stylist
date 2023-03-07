import { MouseEventHandler } from 'react'

interface ButtonProps {
  className?: string

  type?: 'primary' | 'secondary'

  disabled?: boolean

  children?: string

  onClick?: MouseEventHandler
}

export default ButtonProps
