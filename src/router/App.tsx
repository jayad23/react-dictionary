import React, {Suspense} from "react"
import { StyledEngineProvider } from '@mui/material/styles';
import ThemeContextProvider from '../theme/ThemeContextProvider';
import SearchContextProvider from '../context/Context';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoadingComponent } from '../components/common/loading-component';
import { AppRouter } from "./AppRouter";

function App() {
  return (
    <Suspense fallback={<LoadingComponent />}>
      <StyledEngineProvider>
        <ThemeContextProvider>
          <SearchContextProvider>
            <AppRouter />
          </SearchContextProvider>
        </ThemeContextProvider>
      </StyledEngineProvider>
    </Suspense>
  )
}

export default App;
