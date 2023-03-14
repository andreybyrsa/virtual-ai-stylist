import { createBrowserRouter } from 'react-router-dom'

import DevPage from '@Pages/DevPage'
import FavouritesPage from '@Pages/FavouritesPage'
import IndexPage from '@Pages/IndexPage'
import OnBoardingPage from '@Pages/OnBoardingPage'
import PreviewLookPage from '@Pages/PreviewLookPage'
import UploadLookPage from '@Pages/UploadLookPage'

const router = createBrowserRouter([
  {
    path: '/favourites',
    element: <FavouritesPage />,
  },
  {
    path: '/',
    element: <IndexPage />,
  },
  {
    path: '/on-boarding',
    element: <OnBoardingPage />,
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
