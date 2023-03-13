import { createBrowserRouter } from 'react-router-dom'

import DevPage from '@Pages/DevPage'
import IndexPage from '@Pages/IndexPage'
import OnBoardingPage from '@Pages/OnBoardingPage'

const router = createBrowserRouter([
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
