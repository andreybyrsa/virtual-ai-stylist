import { ChangeEvent, useMemo, useRef, useState } from 'react'

import Button from '@Components/Button'
import LookLoader from '@Components/Loaders/LookLoader'
import NavigationSideBar from '@Components/NavigationComponents/NavigationSideBar'

import Footer from '@Layouts/Footer'
import PageLayout from '@Layouts/PageLayout'

import './UploadLookPage.scss'

function UploadLookPage() {
  const [file, setFile] = useState<File>()
  const inputRef = useRef<HTMLInputElement>(null)

  const footer = useMemo(() => {
    return (
      <Footer isNavigation>
        <NavigationSideBar />
      </Footer>
    )
  }, [])

  const onHandlerFileUpload = () => {
    inputRef.current?.click()
  }
  const onHandlerChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0])
  }

  if (file) {
    return <LookLoader />
  }

  return (
    <PageLayout
      className="upload-look-page"
      contentClassName="upload-look-page__content"
      footer={footer}
    >
      <Button type="secondary">Сделать фотографию</Button>
      <Button
        type="secondary"
        onClick={onHandlerFileUpload}
      >
        Загрузить фотографию
      </Button>
      <input
        className="upload-look-page__file-input"
        type="file"
        onChange={onHandlerChangeValue}
        ref={inputRef}
      />
    </PageLayout>
  )
}

export default UploadLookPage
