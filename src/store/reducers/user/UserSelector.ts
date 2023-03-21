import { RootState } from '@Store/index'

const UserSelector = () => {
  return (state: RootState) => state.user.user
}

export default UserSelector
