import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

import Image from '@Components/Image'
import Typography from '@Components/Typography'

import { logo } from '@Assets/images'

import './AppLoader.scss'
import AppLoaderProps from './AppLoader.types'

function AppLoader({ className }: AppLoaderProps) {
  const [redirect, setRedirect] = useState<boolean>(false)
  const AppLoaderClassName = classNames('app-loader', className)

  useEffect(() => {
    setTimeout(() => setRedirect(true), 2000)
  }, [])

  if (redirect) {
    return <Navigate to="/on-boarding" />
  }

  return (
    <div className={AppLoaderClassName}>
      <Image
        imageSrc={logo}
        width={156}
        height={156}
        alt="logo"
      />
      <Typography
        variant="title-t1-bold"
        color="color-text-secondary"
      >
        Virtual AI Stylist
      </Typography>
    </div>
  )
}

export default AppLoader
