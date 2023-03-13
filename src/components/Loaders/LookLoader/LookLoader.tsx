import classNames from 'classnames'

import Image from '@Components/Image'

import { gear } from '@Assets/Images'

import './LookLoader.scss'
import LookLoaderProps from './LookLoader.types'

function LookLoader({ className }: LookLoaderProps) {
  const LookLoaderClassName = classNames('look-loader', className)
  return (
    <div className={LookLoaderClassName}>
      <Image
        className="look-loader__image"
        imageSrc={gear}
        width={180}
        height={180}
        alt="gear"
      />
    </div>
  )
}

export default LookLoader
