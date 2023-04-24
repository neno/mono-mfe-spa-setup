import styled from 'styled-components';
import StyledButton from '../styled/StyledButton';

export const SecondaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors['secondary']};
  color: ${props => props.theme.colors['secondary-content']};
`;

export default SecondaryButton;
