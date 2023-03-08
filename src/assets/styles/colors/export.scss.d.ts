export type Colors = {
  'color-background-primary': string
  'color-background-tertiary': string
  'color-button-primary_active': string
  'color-button-primary_disable': string
  'color-button-primary_enable': string
  'color-button-secondary_active': string
  'color-button-secondary_disable': string
  'color-button-secondary_enable': string
  'color-border-secondary_enable': string
  'color-border-secondary_active': string
  'color-border-secondary_disable': string
  'color-icon-error': string
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
