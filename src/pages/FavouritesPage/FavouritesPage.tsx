import { useMemo } from 'react'

import Card from '@Components/Cards/Card'
import Icon from '@Components/Icon'
import NavigationSideBar from '@Components/NavigationComponents/NavigationSideBar'
import Typography from '@Components/Typography'

import { jacket } from '@Assets/images'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './FavouritesPage.scss'

const cards = [
  { id: 0, name: 'card0', src: [jacket, jacket, jacket], date: Date.now().toString() },
  { id: 1, name: 'card1', src: [jacket, jacket, jacket], date: Date.now().toString() },
  { id: 2, name: 'card2', src: [jacket, jacket, jacket], date: Date.now().toString() },
  { id: 3, name: 'card3', src: [jacket, jacket, jacket], date: Date.now().toString() },
  { id: 4, name: 'card4', src: [jacket, jacket, jacket], date: Date.now().toString() },
]

function FavouritesPage() {
  const header = useMemo(() => {
    return (
      <Header
        rightSideSlot={<Typography variant="title-t1-bold">Избранное</Typography>}
        leftSideSlot={
          <Icon
            iconName="arrowBack"
            color="color-icon-secondary"
            viewBox={35}
            size={35}
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

  return (
    <PageLayout
      contentClassName="favourites-page__content"
      header={header}
      footer={footer}
    >
      <div className="favourites-page__content-cards">
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

export default FavouritesPage
