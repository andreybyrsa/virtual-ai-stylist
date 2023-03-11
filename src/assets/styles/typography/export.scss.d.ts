export type Typography = {
  'text-t1-regular': string
  'text-t2-medium': string
  'text-t3-medium': string
  'text-t4-regular': string
  'text-t5-medium': string
  'text-t6-semiBold': string
  'title-t1-bold': string
  'title-t2-semiBold': string
  'title-t3-medium': string
  'title-t4-medium': string
  'title-t5-medium': string
  'title-t6-semiBold': string
}

export type TypographyVariants = keyof Typography

declare const styles: Typography

export default styles
