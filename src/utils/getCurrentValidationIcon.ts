import { UseFormGetValues } from 'react-hook-form'

import { FormsTypes } from '@Types/Forms.types'

const getCurrentValidationIcon = (
  inputName: keyof FormsTypes,
  error: string,
  isRequired: boolean,
  getInputValue: UseFormGetValues<FormsTypes>,
) => {
  if (isRequired) {
    return 'xMark'
  }
  if (!getInputValue(inputName)) {
    return 'empty'
  }
  return error !== 'undefined' ? 'xMark' : 'check'
}

export default getCurrentValidationIcon
