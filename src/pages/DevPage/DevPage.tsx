import { useEffect, useState } from 'react'

import Button from '@Components/Button'
import Icon from '@Components/Icon'
import IconButton from '@Components/IconButton'
import Image from '@Components/Image'
import NumberField from '@Components/Inputs/NumberField'
import PhoneField from '@Components/Inputs/PhoneField'
import TextField from '@Components/Inputs/TextField'
import AppLoader from '@Components/Loaders/AppLoader'
import NavigationSideBar from '@Components/NavigationComponents/NavigationSideBar'
import Typography from '@Components/Typography'

import jacket from '@Assets/Images/jacket.png'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './DevPage.scss'

function DevPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1500)
  }, [])

  if (isLoading) {
    return <AppLoader />
  }

  return (
    <PageLayout
      contentClassName="dev-page"
      footer={
        <Footer isNavigation>
          <NavigationSideBar />
        </Footer>
      }
      header={
        <Header
          leftSideSlot={<Typography variant="title-t1-bold">Главная</Typography>}
          rightSideSlot={
            <Icon
              iconName="house"
              color="color-icon-secondary"
              size={30}
              viewBox={45}
            />
          }
        />
      }
    >
      <Typography variant="title-t2-semiBold">Dev Page</Typography>
      <Icon
        iconName="house"
        color="color-icon-correct"
        size={40}
        viewBox={45}
      />
      <Button type="primary" />
      <Button type="secondary" />
      <Button
        disabled
        type="primary"
      />
      <Button
        disabled
        type="secondary"
      />
      <TextField
        label="Text"
        minLength={5}
        maxLength={10}
      />
      <TextField
        label="Required"
        required
      />
      <NumberField
        label="Number"
        required
      />
      <PhoneField
        label="Phone"
        required
      />
      <IconButton
        iconName="house"
        viewBox={40}
      />
      <Image
        imageSrc={jacket}
        width={100}
        height={100}
        alt="alt"
        isWrapped
      />
    </PageLayout>
  )
}

export default DevPage
