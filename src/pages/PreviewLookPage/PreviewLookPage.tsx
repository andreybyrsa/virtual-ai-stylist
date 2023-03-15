import { useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom'

import Button from '@Components/Button'
import HorizontalCard from '@Components/Cards/HorizontalCard'
import IconButton from '@Components/IconButton'
import TextField from '@Components/Inputs/TextField'
import LookLoader from '@Components/Loaders/LookLoader'

import { jacket } from '@Assets/images'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './PreviewLookPage.scss'

const cards = [
  { id: 0, src: jacket },
  { id: 1, src: jacket },
  { id: 2, src: jacket },
  { id: 3, src: jacket },
]

function PreviewLookPage() {
  const [refreshLook, setRefreshLook] = useState<boolean>(false)

  const onHandlerRefresh = () => {
    setRefreshLook(true)
    setTimeout(() => setRefreshLook(false), 1500)
  }

  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={
          <NavLink to="/upload-look">
            <IconButton
              type="secondary"
              iconName="arrowBack"
              viewBox={25}
            />
          </NavLink>
        }
        rightSideSlot={
          <IconButton
            onClick={onHandlerRefresh}
            type="secondary"
            iconName="refresh"
            viewBox={30}
          />
        }
      />
    )
  }, [])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button type="secondary">Опубликовать</Button>
        <IconButton
          type="secondary"
          iconName="heartWithPlus"
          viewBox={30}
        />
      </Footer>
    )
  }, [])

  if (refreshLook) {
    return <LookLoader />
  }

  return (
    <PageLayout
      className="preview-look-page"
      contentClassName="preview-look-page__content"
      header={header}
      footer={footer}
    >
      <TextField
        type="secondary"
        required
      />
      {cards.map((elem) => (
        <HorizontalCard
          key={elem.id}
          type="secondary"
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
    </PageLayout>
  )
}

export default PreviewLookPage
