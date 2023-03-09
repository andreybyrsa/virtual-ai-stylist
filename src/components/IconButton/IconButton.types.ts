import { MouseEventHandler } from 'react'

import { IconNameTypes } from '@Types/Icons.types'

interface IconButtonProps {
  className?: string

  type?: 'primary' | 'secondary'

  disabled?: boolean

  onClick?: MouseEventHandler

  viewBox?: number

  iconName: IconNameTypes
}

export default IconButtonProps
