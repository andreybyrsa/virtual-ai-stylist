import classNames from 'classnames'
import { useState } from 'react'

import Image from '@Components/Image'
import Typography from '@Components/Typography'

import './HorizontalCard.scss'
import HorizontalCardProps from './HorizontalCard.types'

function HorizontalCard({ className, imageSrc, cardInfo, links }: HorizontalCardProps) {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const HorizontalCardClassName = classNames(
    'horizontal-card',
    {
      'horizontal-card--is-opened': isOpened,
    },
    className,
  )

  const CardDescription = Object.values(cardInfo).sort((a, b) => {
    if (a === cardInfo.clothesName && b) {
      return -1
    } else if (b === cardInfo.clothesGender && a) {
      return -1
    }
    return 0
  })

  const onHandlerOpen = () => {
    setIsOpened((prevState) => !prevState)
  }

  return (
    <div
      className={HorizontalCardClassName}
      onClick={onHandlerOpen}
    >
      <div className="horizontal-card__clothes-content">
        <Image
          imageSrc={imageSrc}
          width={90}
          height={90}
          alt="clothes"
        />
        <div className="horizontal-card__description">
          {CardDescription.map((elem, index) => (
            <Typography
              key={index}
              variant="text-t2-medium"
            >
              {elem}
            </Typography>
          ))}
        </div>
      </div>
      <div className="horizontal-card__links">
        {links.map((elem, index) => (
          <Typography
            key={index}
            variant="text-t5-medium"
            color="color-text-link"
          >
            {elem}
          </Typography>
        ))}
      </div>
    </div>
  )
}

export default HorizontalCard
