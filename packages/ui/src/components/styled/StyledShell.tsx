import styled from 'styled-components';

export const StyledShell = styled.div`
  position: relative;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(12, minmax(0, 1fr));

  .content {
    grid-column-start: 1;
    grid-column-end: 9;
  }

  .sidebar {
    grid-column-start: 9;
    grid-column-end: 13;
  }
`;
