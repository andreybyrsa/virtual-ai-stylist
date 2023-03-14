import { useMemo } from 'react'

import Button from '@Components/Button'
import HorizontalCard from '@Components/Cards/HorizontalCard'
import Icon from '@Components/Icon'
import IconButton from '@Components/IconButton'
import TextField from '@Components/Inputs/TextField'

import { jacket } from '@Assets/Images'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './LookPage.scss'

const cards = [
  { id: 0, name: 'card0', src: jacket, key: 0 },
  { id: 1, name: 'card1', src: jacket, key: 1 },
  { id: 2, name: 'card2', src: jacket, key: 2 },
  { id: 3, name: 'card3', src: jacket, key: 3 },
]

function LookPage() {
  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={
          <Icon
            iconName="arrowBack"
            color="color-icon-secondary"
            viewBox={35}
            size={35}
          />
        }
        rightSideSlot={
          <Icon
            iconName="basket"
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
      <Footer>
        <Button>Опубликовать</Button>
        <IconButton
          iconName="heartWithPlus"
          viewBox={35}
        ></IconButton>
      </Footer>
    )
  }, [])

  return (
    <PageLayout
      contentClassName="look-page__content"
      header={header}
      footer={footer}
    >
      <TextField placeholder="Классический стиль" />
      <div className="look-page__content-cards">
        {cards.map((elem) => (
          <HorizontalCard
            key={elem.id}
            imageSrc={elem.src}
            cardInfo={{
              clothesName: 'Пиджак классический',
              clothesColor: 'Черный цвет',
              clothesGender: 'Мужской',
            }}
            links={[
              'https://www.detmir.ru/catalog/index/name/.',
              'https://www.detmir.ru/catalog/index/name/.',
              'https://www.detmir.ru/catalog/index/name/.',
            ]}
          />
        ))}
      </div>
    </PageLayout>
  )
}

export default LookPage
