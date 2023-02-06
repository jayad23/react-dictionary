import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App'
import "./index.css";
import { StyledEngineProvider } from '@mui/material/styles';
import ThemeContextProvider from './theme/ThemeContextProvider';
import SearchContextProvider from './context/Context';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledEngineProvider>
      <ThemeContextProvider>
        <SearchContextProvider>
          <App />
        </SearchContextProvider>
      </ThemeContextProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
)
