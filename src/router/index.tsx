import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '@Pages/AuthPage'
import DevPage from '@Pages/DevPage'
import FavouritesPage from '@Pages/FavouritesPage'
import IndexPage from '@Pages/IndexPage'
import LookPage from '@Pages/LookPage'
import OnBoardingPage from '@Pages/OnBoardingPage'
import PreviewLookPage from '@Pages/PreviewLookPage'
import UploadLookPage from '@Pages/UploadLookPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <IndexPage />,
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
    path: '/on-boarding',
    element: <OnBoardingPage />,
  },
  {
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/dev',
    element: <DevPage />,
  },
  {
    path: '/upload-look',
    element: <UploadLookPage />,
  },
  {
    path: '/preview-look',
    element: <PreviewLookPage />,
  },
])

export default router
