import classNames from 'classnames'

import NavigationTab from '@Components/NavigationComponents/NavigationTab'

import { IconNameTypes } from '@Types/Icons.types'

import './NavigationSideBar.scss'
import NavigationSideBarProps from './NavigationSideBar.types'

interface NavLinksTypes {
  id: number
  iconName: IconNameTypes
  viewBox: number
  to: string
}

const navLinks: NavLinksTypes[] = [
  {
    id: 0,
    iconName: 'house',
    viewBox: 50,
    to: '/',
  },
  {
    id: 1,
    iconName: 'plus',
    viewBox: 50,
    to: '/page',
  },
  {
    id: 2,
    iconName: 'clothes',
    viewBox: 40,
    to: '/looks-page',
  },
  {
    id: 3,
    iconName: 'user',
    viewBox: 47,
    to: '/profile',
  },
]

function NavigationSideBar({ className }: NavigationSideBarProps) {
  const NavigationSideBarClassName = classNames('navigation-side-bar', className)

  return (
    <nav className={NavigationSideBarClassName}>
      {navLinks.map((elem) => (
        <NavigationTab
          key={elem.id}
          to={elem.to}
          iconName={elem.iconName}
          viewBox={elem.viewBox}
        />
      ))}
    </nav>
  )
}

export default NavigationSideBar
