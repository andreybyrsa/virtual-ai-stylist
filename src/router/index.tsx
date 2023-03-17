import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '@Pages/AuthPage'
import DevPage from '@Pages/DevPage'
import FavouritesPage from '@Pages/FavouritesPage'
import IndexPage from '@Pages/IndexPage'
import LookPage from '@Pages/LookPage'
import OnBoardingPage from '@Pages/OnBoardingPage'
import PreviewLookPage from '@Pages/PreviewLookPage'
import ProfilePage from '@Pages/ProfilePage'
import UploadLookPage from '@Pages/UploadLookPage'

const router = createBrowserRouter([
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/on-boarding',
    element: <OnBoardingPage />,
  },
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/dev',
    element: <DevPage />,
  },
  {
    path: '/favourites',
    element: <FavouritesPage />,
  },
  {
    path: '/look',
    element: <LookPage />,
  },
  {
    path: '/upload-look',
    element: <UploadLookPage />,
  },
  {
    path: '/preview-look',
    element: <PreviewLookPage />,
  },
  {
    path: '/profile',
    element: <ProfilePage />,
  },
])

export default router
