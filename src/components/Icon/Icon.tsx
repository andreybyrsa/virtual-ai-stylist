import classnames from 'classnames'
import { useCallback, useEffect, useState } from 'react'

import './Icon.scss'
import IconProps from './Icon.types'
import type { IconPathProps } from './iconsPaths'
import iconsPaths from './iconsPaths'

interface CustomSize {
  minWidth: string
  minHeight: string
  maxWidth: string
  maxHeight: string
}

function Icon({
  className,
  iconName = 'check',
  size = 24,
  width = 0,
  height = 0,
  viewBox = 24,
  color = 'color-icon-primary',
}: IconProps) {
  const [translatePathY, setTranslatePathY] = useState<number>(0)
  const [translatePathX, setTranslatePathX] = useState<number>(0)

  const IconClassName = classnames('icon', className)

  let customSize = {
    minWidth: `${size}px`,
    minHeight: `${size}px`,
    maxWidth: `${size}px`,
    maxHeight: `${size}px`,
  } as CustomSize

  if (width && height) {
    customSize = {
      minWidth: `${width}px`,
      minHeight: `${height}px`,
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
    } as CustomSize
  }

  const translatePathById = useCallback(
    (id: string) => {
      const currentPath = document.getElementById(id) as unknown as SVGGraphicsElement
      setTranslatePathY((viewBox - currentPath.getBBox().height) / 2 - currentPath.getBBox().y)
      setTranslatePathX((viewBox - currentPath.getBBox().width) / 2 - currentPath.getBBox().x)
    },
    [viewBox],
  )

  useEffect(() => {
    const svg = iconsPaths[iconName].props as IconPathProps
    if (svg?.children) {
      svg.children.forEach((elem) => {
        translatePathById(elem.props.id)
      })
    } else {
      translatePathById(svg.id)
    }
  }, [iconName, translatePathById, viewBox])
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={IconClassName}
      style={customSize}
      color={`var(--${color})`}
      viewBox={`${-translatePathX} ${-translatePathY} ${viewBox} ${viewBox}`}
      fill="none"
    >
      {iconsPaths[iconName]}
    </svg>
  )
}

export default Icon
