import styled from 'styled-components';

export const StyledFormList = styled.ol`
  list-style: none;

  &,
  li {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const StyledInlineFormList = styled(StyledFormList)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  li {
    width: auto;
  }

  li > label {
    width: auto;
  }
`;
