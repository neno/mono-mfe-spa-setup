import { createGlobalStyle } from 'styled-components';
import { CustomTheme } from '../utils/theme';

export type MyProps = {
  theme: CustomTheme;
};

export const GlobalStyles = createGlobalStyle<MyProps>`
  :root {
    color-scheme: ${props => props.theme.colors['color-scheme']};
    background-color: ${props => props.theme.colors['base-100']};
    color: ${props => props.theme.colors['base-content']};

    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
