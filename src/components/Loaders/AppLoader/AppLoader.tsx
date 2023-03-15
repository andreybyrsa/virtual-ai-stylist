import classNames from 'classnames'

import Image from '@Components/Image'
import Typography from '@Components/Typography'

import { logo } from '@Assets/images'

import './AppLoader.scss'
import AppLoaderProps from './AppLoader.types'

function AppLoader({ className }: AppLoaderProps) {
  const AppLoaderClassName = classNames('app-loader', className)
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
