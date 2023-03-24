export type Colors = {
  'color-background-blue': string
  'color-background-dark': string
  'color-background-dark_light': string
  'color-background-light': string
  'color-background-primary': string
  'color-background-secondary': string
  'color-background-tertiary': string
  'color-border-primary_error': string
  'color-border-secondary_error': string
  'color-border-secondary_active': string
  'color-border-primary_active': string
  'color-border-secondary_disable': string
  'color-border-primary_disable': string
  'color-border-secondary_enable': string
  'color-border-primary_enable': string
  'color-button-primary_active': string
  'color-button-primary_disable': string
  'color-button-primary_enable': string
  'color-button-secondary_active': string
  'color-button-secondary_disable': string
  'color-button-secondary_enable': string
  'color-icon-correct': string
  'color-icon-error': string
  'color-icon-primary': string
  'color-icon-secondary': string
  'color-icon-tertiary': string
  'color-image-primary': string
  'color-input-primary': string
  'color-input-primary_error': string
  'color-input-secondary': string
  'color-input-secondary_error': string
  'color-text-error': string
  'color-text-link': string
  'color-text-primary': string
  'color-text-secondary': string
  'color-text-tertiary': string
  'color-textarea-primary': string
}

export type ColorNames = keyof Colors

declare const styles: Colors

export default styles
