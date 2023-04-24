import styled from 'styled-components';

export const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  gap: 0.5rem;
  align-items: center;

  input {
    background: transparent;
    border: 1px solid #ccc;
  }

  span {
    display: inline-block;
    white-space: nowrap;
    width: 6rem;
  }
`;
