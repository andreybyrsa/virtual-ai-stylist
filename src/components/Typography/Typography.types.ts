import { ColorNamesTypes } from '@Types/Colors.types'
import { TypographyVariantsTypes } from '@Types/Typography.types'

interface TypographyProps {
  className?: string
  children: string

  variant?: TypographyVariantsTypes
  color?: ColorNamesTypes
}

export default TypographyProps
