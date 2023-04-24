import { FC } from 'react';
import StyledGallery from './styled/StyledGallery';

interface GalleryProps {
  children: React.ReactNode;
}

export const Gallery: FC<GalleryProps> = ({ children }) => {
  return <StyledGallery>{children}</StyledGallery>;
};
