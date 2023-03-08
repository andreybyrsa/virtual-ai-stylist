import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Icon from '@Components/Icon'

import './NavigationTab.scss'
import NavigationTabProps from './NavigationTab.types'

function NavigationTab({ className, to, iconName, viewBox }: NavigationTabProps) {
  const NavigationTabClassName = classNames('navigation-tab', className)

  return (
    <NavLink
      className={({ isActive }) => {
        if (isActive) {
          return `${NavigationTabClassName} navigation-tab--active`
        }
        return NavigationTabClassName
      }}
      to={to}
    >
      <Icon
        iconName={iconName}
        size={40}
        viewBox={viewBox}
      />
    </NavLink>
  )
}

export default NavigationTab
