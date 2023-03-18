import { useMemo } from 'react'
import { useSelector } from 'react-redux'

import Button from '@Components/Button'
import Cell from '@Components/Cell'
import Icon from '@Components/Icon'
import Image from '@Components/Image'
import NavigationSideBar from '@Components/NavigationComponents/NavigationSideBar'
import Typography from '@Components/Typography'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import UserSelector from '@Store/reducers/user/UserSelector'

import './ProfilePage.scss'

function ProfilePage() {
  const user = useSelector(UserSelector())

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-t1-bold">Профиль</Typography>} />
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
      className="profile-page"
      header={header}
      footer={footer}
    >
      <div className="profile-page__content">
        <div className="profile-page__content-profile">
          <Image
            className="profile-page__content-avatar"
            width={70}
            height={70}
            imageSrc={`${user?.profilePic}`}
            alt="avatar"
          />
          <div>
            <Typography variant="title-t3-medium">Имя: {user?.userName}</Typography>
            <Typography variant="title-t3-medium">Телефон: {user?.phoneNumber}</Typography>
          </div>
        </div>

        <Cell
          title="Избранное"
          after={
            <Icon
              iconName="navArrow"
              color="color-icon-secondary"
              size={15}
              viewBox={12}
            />
          }
        />

        <Button type="primary">Перейти на премиум</Button>

        <Cell
          title="Оценить приложение"
          after={
            <Icon
              iconName="navArrow"
              color="color-icon-secondary"
              size={15}
              viewBox={12}
            />
          }
        />

        <Cell
          title="Связаться с нами"
          after={
            <Icon
              iconName="navArrow"
              color="color-icon-secondary"
              size={15}
              viewBox={12}
            />
          }
        />
      </div>
    </PageLayout>
  )
}

export default ProfilePage
