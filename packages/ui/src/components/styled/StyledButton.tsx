import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors['neutral']};
  color: ${(props) => props.theme.colors['neutral-content']};
  border: 1px solid ${(props) => props.theme.colors['base-content']};
  border-radius: 0.25rem;
  height: 2rem;
  padding: 0 1rem;
  margin: 1rem 0.5rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export default StyledButton;
