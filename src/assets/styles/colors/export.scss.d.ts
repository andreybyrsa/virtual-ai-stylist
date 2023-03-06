export type Colors = {
  'color-background-primary': string
  'color-background-tertiary': string
  'color-button-active': string
  'color-button-disable': string
  'color-button-enable': string
  'color-icon-correct': string
  'color-icon-primary': string
  'color-icon-secondary': string
  'color-icon-tertiary': string
  'color-image-primary': string
  'color-input-enable': string
  'color-input-error': string
  'color-text-error': string
  'color-text-primary': string
  'color-text-secondary': string
  'color-text-tertiary': string
  'color-textarea-primary': string
}

export type ColorNames = keyof Colors

declare const styles: Colors

export default styles
