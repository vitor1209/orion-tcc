import { createTheme } from "@mui/material/styles";

import { coresOrion, raiosOrion } from "./designTokens";

export const temaOrion = createTheme({
  palette: {
    primary: {
      main: coresOrion.roxoPrincipal,
      light: coresOrion.roxoSuave,
      dark: "#7c3aed",
      contrastText: "#ffffff",
    },
    secondary: {
      main: coresOrion.azulDestaque,
      dark: coresOrion.azulProfundo,
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
    text: {
      primary: coresOrion.textoPrincipal,
      secondary: coresOrion.textoSecundario,
    },
  },
  typography: {
    fontFamily: '"Ubuntu", "Inter", Arial, Helvetica, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.04em" },
    h2: { fontWeight: 800, letterSpacing: "-0.032em" },
    h3: { fontWeight: 800 },
    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: raiosOrion.card,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Ubuntu", "Inter", Arial, Helvetica, sans-serif',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          WebkitTapHighlightColor: "transparent",
        },
      },
    },
  },
});

