/* eslint-disable max-len */
import { ReactElement } from 'react'

const iconsPaths = {
  check: (
    <path
      id="check"
      d="M20 6L9 17L4 12"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

export interface IconPathProps extends ReactElement<SVGGraphicsElement> {
  id: string
  children?: ReactElement<SVGGraphicsElement>[]
}

export type IconPathsType = typeof iconsPaths

export default iconsPaths
