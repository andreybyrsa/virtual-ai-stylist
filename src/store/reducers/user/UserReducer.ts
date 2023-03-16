import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { User } from '@Domain/user'

import initialState from '@Store/reducers/user/initialState'

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload
    },
    removeUser(state) {
      state.user = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
