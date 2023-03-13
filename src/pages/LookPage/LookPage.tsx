import { useMemo } from 'react'

import Button from '@Components/Button'
import HorizontalCard from '@Components/Cards/HorizontalCard'
import Icon from '@Components/Icon'
import IconButton from '@Components/IconButton'

import { jacket } from '@Assets/Images'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './LookPage.scss'

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
      <HorizontalCard
        imageSrc={jacket}
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
      <HorizontalCard
        imageSrc={jacket}
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
      <HorizontalCard
        imageSrc={jacket}
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
      <HorizontalCard
        imageSrc={jacket}
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
    </PageLayout>
  )
}

export default LookPage
