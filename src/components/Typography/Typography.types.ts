import { ColorNamesTypes } from '@Components/styles/Colors.types'
import { TypographyVariantsTypes } from '@Components/styles/Typography.types'

interface TypographyProps {
  className?: string
  children: string

  variant?: TypographyVariantsTypes
  color?: ColorNamesTypes
}

export default TypographyProps
