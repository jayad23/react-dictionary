import { createTheme } from "@mui/material";

export const baseTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2a3eb1",
    },
    secondary: {
      main: "#f50057"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { padding: 0 },
      },
    },
  },
  typography: {
    fontFamily: ["Roboto", "Helvetica"].join(","),
    h1: {
      fontFamily: [
        'Roboto',
        "'Press Start 2P', cursive"
        
      ].join(','),
      fontSize: 36,
    }
  },
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})