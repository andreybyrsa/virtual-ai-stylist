import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'

import Button from '@Components/Button'
import Icon from '@Components/Icon'
import Image from '@Components/Image'
import PhoneField from '@Components/Inputs/PhoneField'
import TextField from '@Components/Inputs/TextField'
import Typography from '@Components/Typography'

import useAuth from '@Hooks/useAuth'

import Footer from '@Layouts/Footer'
import Header from '@Layouts/Header'
import PageLayout from '@Layouts/PageLayout'

import { setUser } from '@Store/reducers/user/UserReducer'

import './AuthPage.scss'

function AuthPage() {
  const [imageFile, setImageFile] = useState<File>()
  const [currentImage, setCurrentImage] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const [userName, setUserName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')

  const isAuth = useAuth()

  const dispatch = useDispatch()

  const onHandlerSubmit = useCallback(() => {
    dispatch(
      setUser({
        userName,
        phoneNumber,
        profilePic: currentImage,
        passWord: '123',
        id: null,
      }),
    )
  }, [currentImage, dispatch, phoneNumber, userName])

  const onHandlerFileUpload = () => {
    inputRef.current?.click()
  }

  const onHandlerChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setImageFile(event.target.files?.[0])
  }

  useEffect(() => {
    if (imageFile) {
      setCurrentImage(URL.createObjectURL(imageFile))
    }
  }, [imageFile])

  const footer = useMemo(() => {
    return (
      <Footer>
        <Button
          onClick={onHandlerSubmit}
          disabled={!phoneNumber || !userName}
        >
          Войти
        </Button>
      </Footer>
    )
  }, [onHandlerSubmit, phoneNumber, userName])

  const header = useMemo(() => {
    return <Header leftSideSlot={<Typography variant="title-t1-bold">Авторизация</Typography>} />
  }, [])

  if (isAuth) {
    return <Navigate to="/" />
  }

  return (
    <PageLayout
      contentClassName="auth-page__content"
      header={header}
      footer={footer}
    >
      <button
        className="auth-page__upload-button"
        onClick={onHandlerFileUpload}
      >
        {imageFile ? (
          <Image
            className="auth-page__content-avatar"
            imageSrc={currentImage}
            width={140}
            height={140}
            alt="avatar"
          />
        ) : (
          <Icon
            className="auth-page__content-avatar"
            iconName="avatar"
            color={'color-icon-secondary'}
            viewBox={140}
            size={140}
          />
        )}
      </button>
      <input
        className="auth-page__file-input"
        onChange={onHandlerChangeValue}
        type="file"
        ref={inputRef}
      />
      <div className="auth-page__content-input">
        <TextField
          label="Имя"
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
