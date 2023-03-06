export type Typography = {
  'text-t1-regular': string
  'text-t2-regular': string
  'text-t3-semiBold': string
  'text-t4-regular': string
  'text-t5-medium': string
  'text-t6-semiBold': string
  'title-t1-bold': string
  'title-t2-semiBold': string
  'title-t3-semiBold': string
  'title-t4-medium': string
  'title-t5-semiBold': string
  'title-t6-semiBold': string
  'title-t7-semiBold': string
  'title-t8-medium': string
}

export type TypographyVariants = keyof Typography

declare const styles: Typography

export default styles
