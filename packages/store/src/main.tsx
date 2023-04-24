import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { AppQueryClient } from './AppQueryClient';

ReactDOM.render(
  <React.StrictMode>
    <AppQueryClient>
      <App />
    </AppQueryClient>
  </React.StrictMode>,
  document.getElementById('root')
);
