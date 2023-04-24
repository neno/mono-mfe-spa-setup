import { ImgHTMLAttributes, type FC } from 'react';
import { StyledImage } from './styled/StyledImage';

export const Image: FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  src,
  alt,
  width,
  height,
  className,
  ...props
}) => {
  if (src) {
    return (
      <StyledImage
        {...props}
        src={src ?? ''}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }

  return null;
};
