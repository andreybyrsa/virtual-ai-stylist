import { RootState } from '@Store/index'

function UserSelector() {
  return (state: RootState) => state.user.user
}

export default UserSelector
