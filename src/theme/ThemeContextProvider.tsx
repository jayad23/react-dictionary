import React, { ReactNode, useState, useMemo } from "react";
import { createTheme, ThemeProvider, CssBaseline, PaletteMode } from '@mui/material';
import { ThemeContext } from "./ThemeContext";
import { baseTheme } from "./baseTheme";

const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<PaletteMode>("light");
  const theme = useMemo(() => createTheme(baseTheme), []);

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme/>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );

};

export default ThemeContextProvider;