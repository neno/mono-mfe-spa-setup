import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import { GlobalStyles } from './components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ThemeProvider theme={theme}>
      {/* @ts-ignore */}
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
