import { User } from '@Domain/user'

interface UserInitialState {
  user: User | null
}

const initialState: UserInitialState = {
  user: null,
}

export default initialState
