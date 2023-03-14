import classNames from 'classnames'

import './Image.scss'
import ImageProps from './Image.types'

function Image({
  className,
  wrapperClassName,
  imageSrc,
  width = 100,
  height = 100,
  alt,
  isWrapped = false,
}: ImageProps) {
  const ImageClassName = classNames('image', className)
  const ImageWrapperClassName = classNames('image-wrapper', wrapperClassName)
  const image = (
    <img
      className={ImageClassName}
      src={imageSrc}
      width={width}
      height={height}
      alt={alt}
      loading="lazy"
    />
  )
  if (isWrapped) {
    return <div className={ImageWrapperClassName}>{image}</div>
  }
  return image
}

export default Image
