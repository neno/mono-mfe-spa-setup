import { FC, ReactNode } from 'react';
import StyledCard from './styled/StyledCard';
import { Image } from './Image';

interface ImageCardProps {
  title: string;
  poster_path: string;
  children?: ReactNode;
}

export const ImageCard: FC<ImageCardProps> = ({
  poster_path,
  title,
  children,
}) => {
  return (
    <StyledCard>
      <Image
        src={poster_path}
        alt={title}
        sizes='(min-width: 1280px) 640px, (min-width: 768px) 50vw, 100vw'
        width={640}
        height={960}
      />
      {children}
    </StyledCard>
  );
};
