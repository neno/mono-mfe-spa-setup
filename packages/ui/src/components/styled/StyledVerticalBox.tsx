import styled from 'styled-components';

export const StyledVerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.colors['neutral']};
`;
