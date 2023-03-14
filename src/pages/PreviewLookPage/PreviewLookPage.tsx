import { useMemo } from 'react'

import Button from '@Components/Button'
import IconButton from '@Components/IconButton'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './PreviewLookPage.scss'

function PreviewLookPage() {
  const header = useMemo(() => {
    return (
      <Header
        leftSideSlot={
          <IconButton
            type="secondary"
            iconName="arrowBack"
            viewBox={25}
          />
        }
        rightSideSlot={
          <IconButton
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
  return (
    <PageLayout
      className="preview-look-page"
      header={header}
      footer={footer}
    ></PageLayout>
  )
}

export default PreviewLookPage
