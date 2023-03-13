import { createBrowserRouter } from 'react-router-dom'

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
    path: '/dev',
    element: <DevPage />,
  },
])

export default router
