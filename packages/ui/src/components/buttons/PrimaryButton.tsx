import styled from 'styled-components';
import StyledButton from '../styled/StyledButton';

export const PrimaryButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors['primary']};
  color: ${props => props.theme.colors['primary-content']};
`;

export default PrimaryButton;
