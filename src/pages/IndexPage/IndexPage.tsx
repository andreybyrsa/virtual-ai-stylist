import { useEffect, useMemo, useState } from 'react'

import Card from '@Components/Cards/Card'
import Icon from '@Components/Icon'
import AppLoader from '@Components/Loaders/AppLoader'
import NavigationSideBar from '@Components/NavigationComponents/NavigationSideBar'
import Typography from '@Components/Typography'

import { jacket } from '@Assets/images'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './IndexPage.scss'

const cards = [
  { id: 0, name: 'card1', src: [jacket], date: Date.now().toString() },
  { id: 1, name: 'card1', src: [jacket, jacket], date: Date.now().toString() },
  { id: 2, name: 'card2', src: [jacket, jacket, jacket], date: Date.now().toString() },
]

function IndexPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={<Typography variant="title-t1-bold">Главная</Typography>}
        rightSideSlot={
          <Icon
            iconName="heart"
            color="color-icon-secondary"
            viewBox={35}
            size={30}
          />
        }
      />
    )
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer isNavigation>
        <NavigationSideBar />
      </Footer>
    )
  }, [])

  if (isLoading) {
    return <AppLoader />
  }

  return (
    <PageLayout
      contentClassName="index-page__content"
      header={header}
      footer={footer}
    >
      <div className="index-page__content-cards">
        {cards.map((elem) => (
          <Card
            key={elem.id}
            cardName={elem.name}
            imageSrces={elem.src}
            date={elem.date}
          />
        ))}
      </div>
    </PageLayout>
  )
}

export default IndexPage
