import { useMemo } from 'react'

import Button from '@Components/Button'
import Icon from '@Components/Icon'
import PhoneField from '@Components/Inputs/PhoneField'
import TextField from '@Components/Inputs/TextField'
import Typography from '@Components/Typography'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import './AuthPage.scss'

function AuthPage() {
  const footer = useMemo(() => {
    return (
      <Footer>
        <Button disabled />
      </Footer>
    )
  }, [])

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-t1-bold">Авторизация</Typography>} />
  }, [])

  return (
    <PageLayout
      contentClassName="auth-page__content"
      header={header}
      footer={footer}
    >
      <Icon
        className="auth-page__content--avatar"
        iconName="avatar"
        color={'color-icon-secondary'}
        viewBox={140}
        size={140}
      />
      <div className="auth-page__content--input">
        <TextField label="Имя"></TextField>
        <PhoneField label="Номер телефона"></PhoneField>
      </div>
      <div className="auth-page__content--politics">
        <Typography variant="text-t4-regular">Регистрируясь, вы принимаете условия</Typography>
        <Typography variant="text-t4-regular">Политики конфиденциальности</Typography>
      </div>
      <div className="auth-page__content--icon">
        <Icon
          iconName="googleIcon"
          viewBox={45}
          size={48}
        />
        <Icon
          className="auth-page__content-vkIcon"
          iconName="vkIcon"
          viewBox={45}
          size={48}
        />
        <Icon
          iconName="appleIcon"
          viewBox={20}
          size={48}
        />
      </div>
    </PageLayout>
  )
}

export default AuthPage
