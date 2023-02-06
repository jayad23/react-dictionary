import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2a3eb1"
    },
    secondary: {
      main: "#55555"
    }
  },
  typography: {
    fontFamily: [
      'Roboto',
      'Press Start 2P'
      
    ].join(','),
  },
})