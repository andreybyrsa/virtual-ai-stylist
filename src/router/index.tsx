import { createBrowserRouter } from 'react-router-dom'

import DevPage from '@Pages/DevPage'
import FavouritesPage from '@Pages/FavouritesPage'
import IndexPage from '@Pages/IndexPage'
import LookPage from '@Pages/LookPage'
import OnBoardingPage from '@Pages/OnBoardingPage'

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
    path: '/dev',
    element: <DevPage />,
  },
])

export default router
