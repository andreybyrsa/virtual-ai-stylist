import { MouseEventHandler } from 'react'

interface ButtonProps {
  className?: string
  type: 'primary' | 'secondary'

  children?: string
  onClick?: MouseEventHandler
}

export default ButtonProps
