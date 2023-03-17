import { useCallback, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'

import Button from '@Components/Button'
import Icon from '@Components/Icon'
import PhoneField from '@Components/Inputs/PhoneField'
import TextField from '@Components/Inputs/TextField'
import Typography from '@Components/Typography'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import { setUser } from '@Store/reducers/user/UserReducer'

import './AuthPage.scss'

function AuthPage() {
  const [userName, setUserName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const dispatch = useDispatch()

  const onHandlerSubmit = useCallback(() => {
    dispatch(
      setUser({
        userName,
        phoneNumber,
        avatar: null,
        id: null,
      }),
    )
  }, [dispatch, phoneNumber, userName])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button
          onClick={onHandlerSubmit}
          disabled={!phoneNumber || !userName}
        />
      </Footer>
    )
  }, [onHandlerSubmit, phoneNumber, userName])

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
        className="auth-page__content-avatar"
        iconName="avatar"
        color={'color-icon-secondary'}
        viewBox={140}
        size={140}
      />
      <div className="auth-page__content-input">
        <TextField
          label="Имя"
          placeholder="Введите имя"
          setValue={setUserName}
          required
        />
        <PhoneField
          label="Номер телефона"
          setCurrentValue={setPhoneNumber}
          required
        />
      </div>
      <div className="auth-page__content-politics">
        <Typography variant="text-t4-regular">Регистрируясь, вы принимаете условия</Typography>
        <Typography variant="text-t4-regular">Политики конфиденциальности</Typography>
      </div>
      <div className="auth-page__content-icons">
        <Icon
          iconName="googleIcon"
          viewBox={45}
          size={48}
        />
        <Icon
          className="auth-page__content-vk-icon"
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
