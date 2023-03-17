import userSelector from '@Store/reducers/user/UserSelector'

const useAuth = () => {
  const user = userSelector()
  return !!user?.id
}

export default useAuth
