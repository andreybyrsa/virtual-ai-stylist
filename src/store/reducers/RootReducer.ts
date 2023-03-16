import { combineReducers } from '@reduxjs/toolkit'

import card from './card'
import user from './user'

const rootReducer = combineReducers({
  card,
  user,
})

export default rootReducer
