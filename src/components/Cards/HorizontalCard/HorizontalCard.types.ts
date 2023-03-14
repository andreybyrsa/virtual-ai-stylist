type CardInfoTypes = {
  clothesName: string
  clothesColor: string
  clothesGender: string
}

interface HorizontalCardProps {
  className?: string

  imageSrc: string
  cardInfo: CardInfoTypes
  links: string[]
}

export default HorizontalCardProps
