import axios from 'axios'

import { User } from '@Domain/user'

export const getApiUser = async (user: User) => {
  return await axios
    .post('https://virtual-ai-stylist-backend.onrender.com/auth/register', {
      ...user,
    })
    .then((response) => response.data)
}
