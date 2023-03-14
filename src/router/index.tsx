import { createBrowserRouter } from 'react-router-dom'

import AuthPage from '@Pages/AuthPage'
import DevPage from '@Pages/DevPage'
import FavouritesPage from '@Pages/FavouritesPage'
import IndexPage from '@Pages/IndexPage'
import OnBoardingPage from '@Pages/OnBoardingPage'

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
    path: '/auth',
    element: <AuthPage />,
  },
  {
    path: '/dev',
    element: <DevPage />,
  },
])

export default router
