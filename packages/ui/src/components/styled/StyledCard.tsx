import styled from 'styled-components';

export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 2/3;

  background-color: ${props => props.theme.colors['neutral']};

  & > button {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

export default StyledCard;
