import axios from 'axios'

import { User } from '@Domain/user'

export const getApiUser = async (user: User) => {
  try {
    return await axios
      .post('https://tame-ruby-octopus-tam.cyclic.app/auth/login', {
        ...user,
      })
      .then((response) => response.data)
  } catch {
    return await axios
      .post('https://tame-ruby-octopus-tam.cyclic.app/auth/register', {
        ...user,
      })
      .then((response) => response.data)
  }
}
