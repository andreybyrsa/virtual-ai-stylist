import classNames from 'classnames'

import Typography from '@Components/Typography'

import './Cell.scss'
import CellProps from './Cell.types'

function Cell({
  className,
  disabled = false,
  onClick,
  title,
  before,
  after,
  subtitle,
  text,
}: CellProps) {
  const CellClassName = classNames('cell', { 'cell--disabled': disabled }, className)
  return (
    <div
      className={CellClassName}
      onClick={onClick}
    >
      {before}
      <div className="cell__text">
        <Typography variant="title-t3-medium">{title}</Typography>
        <Typography variant="title-t7-semiBold">{subtitle}</Typography>
        <Typography variant="text-t6-semiBold">{text}</Typography>
      </div>
      {after}
    </div>
  )
}

export default Cell
