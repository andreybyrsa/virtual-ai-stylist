import userSelector from '@Store/reducers/user/UserSelector'

const useAuth = () => {
  const user = userSelector()
  return !!user.user?.id
}

export default useAuth
