import { ColorNamesTypes } from '@Types/Colors.types'
import { IconNameTypes } from '@Types/Icons.types'

interface IconProps {
  className?: string

  iconName: IconNameTypes
  size?: number
  width?: number
  height?: number
  viewBox?: number
  color?: ColorNamesTypes
}

export default IconProps
