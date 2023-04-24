import { FC } from 'react';
import { StyledListItem } from './styled/StyledListItem';
import { Image } from './Image';

interface ListItemProps {
  img?: string;
  title?: string;
  text?: string;
  children?: React.ReactNode;
}

export const ListItem: FC<ListItemProps> = ({ img, title, text, children }) => {
  return (
    <StyledListItem>
      <div className="img">
        {img && <Image src={img} alt={title} height={300} width={200} />}
      </div>
      <div className="content">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <div className="actions">{children}</div>
    </StyledListItem>
  );
};
