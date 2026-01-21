import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      light: "#00B37E", // green-light
      main: "#00875F", // green
      dark: "#015F43", // green-dark
      contrastText: "#fff",
    },
    secondary: {
      light: "#2D2D2E", // gray
      main: "#121214", // black
      grayTwo: "#202024", // bold gray
      grayThree: "#29292E", // middle gray
      contrastText: "#fff",
    },

    text: {
      base: "#C4C4CC",
      title: "#E1E1E6",
    },
    background: {
      default: "#FFFFF",
      paper: "#C4C4CC",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          ":hover": {
            background: "#00B37E",
          }
        },
      },
    },
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',

    fontWeightRegular: 400,
    fontWeightBold: 700,

    body1: {
      fontSize: '16px',
      lineHeight: 1.6,
    },

    body2: {
      fontSize: '14px',
      lineHeight: 1.6,
    },

    h1: {
      fontSize: "16px", // xs (default)

      '@media (min-width:600px)': {
        fontSize: "24px",
      },
      '@media (min-width:900px)': {
        fontSize: "32px",
      },
      '@media (min-width:1200px)': {
        fontSize: "40px",
      },
    },

    h3: {
    }

  }
});
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#00B37E", // green-light
      main: "#00875F", // green
      dark: "#015F43", // green-dark
      contrastText: "#fff",
    },
    secondary: {
      light: "#2D2D2E", // gray
      main: "#121214", // black
      grayTwo: "#202024", // bold gray
      grayThree: "#29292E", // middle gray
      contrastText: "#fff",
    },

    text: {
      base: "#C4C4CC",
      title: "#E1E1E6",
    },
    background: {
      default: "#202024",
      paper: "#121214",
    },
  },

  components: {
    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: "none",
          ":hover": {
            background: "#00B37E",
          }
        },
      },
    },
  },

  typography: {
    fontFamily: 'Roboto, sans-serif',

    fontWeightRegular: 400,
    fontWeightBold: 700,

    body1: {
      fontSize: '16px',
      lineHeight: 1.6,
    },

    body2: {
      fontSize: '14px',
      lineHeight: 1.6,
    },

    h1: {
      fontSize: "16px", // xs (default)

      '@media (min-width:600px)': {
        fontSize: "24px",
      },
      '@media (min-width:900px)': {
        fontSize: "32px",
      },
      '@media (min-width:1200px)': {
        fontSize: "40px",
      },
    },

    h3: {
    }

  }
});
