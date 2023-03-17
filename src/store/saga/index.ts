import { all, call, put, select, takeEvery } from 'redux-saga/effects'

import { ApiUser } from '@Domain/apiUser'
import { User } from '@Domain/user'

import { setUser } from '@Store/reducers/user/UserReducer'
import UserSelector from '@Store/reducers/user/UserSelector'

import { getApiUser } from '../../api/getApiUser'

function* setUserWorker() {
  const user: User = yield select(UserSelector())
  const apiUser: ApiUser = yield call(() => getApiUser(user))

  yield put(
    setUser({
      id: apiUser._id,
      userName: apiUser.userName,
      passWord: apiUser.passWord,
      phoneNumber: apiUser.phoneNumber,
      avatar: apiUser.profilePic,
    }),
  )
}

function* watchAllSaga() {
  yield all([takeEvery(setUser, setUserWorker)])
}

export default function* rootSaga() {
  yield watchAllSaga()
}
