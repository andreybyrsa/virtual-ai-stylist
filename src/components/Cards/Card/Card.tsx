import classNames from 'classnames'

import Image from '@Components/Image'
import Typography from '@Components/Typography'

import './Card.scss'
import CardProps from './Card.types'

function Card({ className, cardName, imageSrces, date }: CardProps) {
  const CardClassName = classNames('card', className)
  return (
    <div className={CardClassName}>
      <div className="card__images">
        {imageSrces.map((elem, index) => (
          <Image
            key={index}
            imageSrc={elem}
            width={80}
            height={80}
            alt="img-clothes"
          />
        ))}
      </div>
      <div className="card__info">
        <Typography
          variant="text-t5-medium"
          color="color-text-tertiary"
        >
          {cardName}
        </Typography>
        <Typography
          variant="text-t5-medium"
          color="color-text-tertiary"
        >
          {date}
        </Typography>
      </div>
    </div>
  )
}

export default Card
