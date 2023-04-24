import styled from 'styled-components';

export const StyledListItem = styled.li`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.neutral};

  .img {
    flex-shrink: 0;
    width: 50px;
    aspect-ratio: 2 / 3;
  }

  .content {
    flex: 1 1 auto;
    position: relative;
    overflow: hidden;

    h3 {
      margin: 0 0 0.25rem;
    }

    p {
      margin: 0;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .actions {
    flex: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50px;
    padding: 1rem;
  }
`;
