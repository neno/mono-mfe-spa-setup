import { FC } from 'react';
import { StyledShell } from './styled/StyledShell';

interface ShellProps {
  children?: React.ReactNode;
  sidebar?: React.ReactNode;
}

export const Shell: FC<ShellProps> = ({ children, sidebar }) => {
  return (
    <StyledShell>
      <div className="content">{children}</div>
      <div className="sidebar">{sidebar}</div>
    </StyledShell>
  );
};
