import { UseFormSetValue } from 'react-hook-form'

import { FormsTypes } from '@Types/Forms.types'

const getPhoneMaskPattern = (currentPhone: string, setPhoneValue: UseFormSetValue<FormsTypes>) => {
  const value = currentPhone
  const indexes: number[][] = [
    [0, 2],
    [2, 5],
    [5, 8],
    [8, 10],
    [10, 12],
    [12, value.length],
  ]
  let phoneValue = ''
  indexes.forEach((elem, index) => {
    if (index === 0) {
      phoneValue += `${value.substring(elem[0], elem[1])}`
      return
    }
    if (value.substring(elem[0], elem[1]) && (index === 1 || index === 2)) {
      phoneValue += `-(${value.substring(elem[0], elem[1])})`
    }
    if (value.substring(elem[0], elem[1]) && index > 2) {
      phoneValue += `-${value.substring(elem[0], elem[1])}`
    }
  })

  setPhoneValue('phoneField', phoneValue.trim())
}

export default getPhoneMaskPattern
