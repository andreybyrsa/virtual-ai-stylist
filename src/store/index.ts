import { configureStore } from '@reduxjs/toolkit'

import rootReducer from '@Store/reducers/RootReducer'

const store = configureStore({
  reducer: rootReducer,
})

export default store
