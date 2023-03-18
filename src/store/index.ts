import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleWare from 'redux-saga'

import rootReducer from '@Store/reducers/RootReducer'

import rootSaga from './saga'

const sagaMiddleWare = createSagaMiddleWare()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(sagaMiddleWare),
})

sagaMiddleWare.run(rootSaga)

export default store

export type RootState = ReturnType<typeof store.getState>
