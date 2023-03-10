import { useCallback, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'
import SwiperCore from 'swiper'

import Button from '@Components/Button'
import OnBoardingSwiper from '@Components/OnBoardingSwiper'
import Typography from '@Components/Typography'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './OnBoardingPage.scss'

function OnBoardingPage() {
  const [swiper, setSwiper] = useState<SwiperCore>()
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const onHandlerSwipe = useCallback(() => {
    swiper?.slideNext()
    setCurrentIndex((prevState) => prevState + 1)
  }, [swiper])

  const header = useMemo(() => {
    return (
      <Header className="on-boarding-page__header">
        <NavLink to="/">
          <Typography variant="text-t3-semiBold">Пропустить</Typography>
        </NavLink>
      </Header>
    )
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button onClick={onHandlerSwipe}>{currentIndex < 2 ? 'Продолжить' : 'Начать'}</Button>
      </Footer>
    )
  }, [currentIndex, onHandlerSwipe])

  return (
    <PageLayout
      header={header}
      footer={footer}
    >
      <OnBoardingSwiper onHandlerSwipe={setSwiper} />
    </PageLayout>
  )
}

export default OnBoardingPage
