import classNames from 'classnames'

import Icon from '@Components/Icon'
import Typography from '@Components/Typography'

import './Cell.scss'
import CellProps from './Cell.types'

function Cell({
  className,
  disabled = false,
  onClick,
  title,
  before = false,
  after = false,
  subtitle,
  text,
}: CellProps) {
  const CellClassName = classNames('cell', { 'cell--disabled': disabled }, className)
  return (
    <button
      className={CellClassName}
      onClick={onClick}
      disabled={disabled}
    >
      {before && (
        <Icon
          className="cell__icon"
          iconName="house"
          color="color-icon-secondary"
          size={20}
          viewBox={45}
        />
      )}
      <div className="cell__text">
        <Typography variant="title-t4-medium">{title}</Typography>
        <Typography variant="title-t6-semiBold">{subtitle}</Typography>
        <Typography variant="text-t5-medium">{text}</Typography>
      </div>
      {after && (
        <Icon
          className="cell__icon"
          iconName="house"
          color="color-icon-secondary"
          size={20}
          viewBox={45}
        />
      )}
    </button>
  )
}

export default Cell
