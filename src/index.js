import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App.jsx';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/App/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={{}}>
      <App />
      <GlobalStyle/>
      </ThemeProvider>
  </React.StrictMode>
);
