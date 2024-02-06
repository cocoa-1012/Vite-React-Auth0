import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './app/themes/ThemeProvider.tsx';
import { GlobalStyle } from './app/components/styled-components/StyledComponents.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider >
          <GlobalStyle />
            <App /> 
        </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)