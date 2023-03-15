type CardInfoTypes = {
  clothesName: string
  clothesColor: string
  clothesGender: string
}

interface HorizontalCardProps {
  className?: string

  type?: 'primary' | 'secondary'

  imageSrc: string
  cardInfo: CardInfoTypes
  links: string[]
}

export default HorizontalCardProps
