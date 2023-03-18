import { useSelector } from 'react-redux'

import UserSelector from '@Store/reducers/user/UserSelector'

const useAuth = () => {
  const user = useSelector(UserSelector())
  return !!user?.id
}

export default useAuth
