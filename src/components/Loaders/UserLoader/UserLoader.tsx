import classNames from 'classnames'
import { useEffect, useState } from 'react'

import Typography from '@Components/Typography'

import './UserLoader.scss'
import UserLoaderProps from './UserLoader.types'

function UserLoader({ className, userState }: UserLoaderProps) {
  const [dots, setDots] = useState('')
  const UserLoaderClassName = classNames('user-loader', className)

  useEffect(() => {
    if (dots.length < 3) {
      setTimeout(() => setDots((prevState) => prevState + '.'), 200)
    } else {
      setTimeout(() => setDots(''), 200)
    }
  }, [dots])

  return (
    <div className={UserLoaderClassName}>
      <Typography
        className="user-loader__text"
        variant="title-t3-medium"
      >
        {userState} пользователя{dots}
      </Typography>
    </div>
  )
}

export default UserLoader
