import classNames from 'classnames'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/pagination'

import Image from '@Components/Image'
import Typography from '@Components/Typography'

import onBoardingContent from '@Assets/Images/onBoardingContent.png'

import './OnBoardingSwiper.scss'
import OnBoardingSwiperProps from './OnBoardingSwiper.types'

interface SlideTypes {
  id: number
  src: string
  title: string
  text: string
}

const slidesContent: SlideTypes[] = [
  {
    id: 0,
    src: onBoardingContent,
    title: 'Заголовок',
    text:
      'Когда человек сознательно или \n' +
      'интуитивно выбирает себе в жизни \n' +
      'какую-то цель, жизненную задачу.',
  },
  {
    id: 1,
    src: onBoardingContent,
    title: 'Заголовок',
    text:
      'Когда человек сознательно или \n' +
      'интуитивно выбирает себе в жизни \n' +
      'какую-то цель, жизненную задачу.',
  },
  {
    id: 2,
    src: onBoardingContent,
    title: 'Заголовок',
    text:
      'Когда человек сознательно или \n' +
      'интуитивно выбирает себе в жизни \n' +
      'какую-то цель, жизненную задачу.',
  },
]

function OnBoardingSwiper({ className, onHandlerSwipe }: OnBoardingSwiperProps) {
  const OnBoardingSwiperClassName = classNames('on-boarding-swiper', className)
  return (
    <Swiper
      className={OnBoardingSwiperClassName}
      modules={[Pagination]}
      pagination={{ clickable: false }}
      allowTouchMove={false}
      onSwiper={onHandlerSwipe}
    >
      {slidesContent.map((elem) => (
        <SwiperSlide
          className="on-boarding-swiper__slide"
          key={elem.id}
        >
          <Image
            isWrapped
            className="on-boarding-swiper__slide-image"
            imageSrc={elem.src}
            alt="slide-content"
          />
          <Typography
            className="on-boarding-swiper__slide-title"
            variant="title-t2-semiBold"
          >
            {elem.title}
          </Typography>
          <Typography variant="text-t2-regular">{elem.text}</Typography>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default OnBoardingSwiper
