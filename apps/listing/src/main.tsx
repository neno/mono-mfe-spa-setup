import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { AppQueryClient } from '@myorg/store';
import { ThemeProvider } from 'styled-components';
import { colorThemes, GlobalStyles } from '@myorg/ui';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* @ts-ignore */}
    <ThemeProvider theme={colorThemes['[data-theme=dark]']}>
      {/* @ts-ignore */}
      <GlobalStyles />
      <AppQueryClient>
        <App />
      </AppQueryClient>
    </ThemeProvider>
  </React.StrictMode>
);
