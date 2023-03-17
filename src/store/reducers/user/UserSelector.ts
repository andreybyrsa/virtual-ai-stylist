import { useSelector } from 'react-redux'

import { RootState } from '@Store/index'

function UserSelector() {
  return useSelector((state: RootState) => state.user)
}

export default UserSelector
