import styled from 'styled-components';
import StyledButton from './StyledButton';

const StyledAccentButton = styled(StyledButton)`
  background-color: ${props => props.theme.colors['accent']};
  color: ${props => props.theme.colors['accent-content']};
`;

export default StyledAccentButton;
