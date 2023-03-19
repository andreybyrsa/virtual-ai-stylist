import { all, call, put, select, takeLeading } from 'redux-saga/effects'

import { User } from '@Domain/user'

import { setUser } from '@Store/reducers/user/UserReducer'
import UserSelector from '@Store/reducers/user/UserSelector'

import { getApiUser } from '../../api/getApiUser'

function* setUserWorker() {
  const user: User = yield select(UserSelector())
  const apiUser: User = yield call(() => getApiUser(user))

  yield put(
    setUser({
      ...apiUser,
    }),
  )
}

function* watchAllSaga() {
  yield all([takeLeading(setUser, setUserWorker)])
}

export default function* rootSaga() {
  yield watchAllSaga()
}
