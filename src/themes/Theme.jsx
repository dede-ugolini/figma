import { createTheme } from "@mui/material/styles";

const theme = createTheme();

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#02d999",
      dark: "#015F43", // green-dark
    },
    secondary: {
      light: "#2D2D2E", // gray
      main: "#121214", // black
      grayTwo: "#202024", // bold gray
      grayThree: "#29292E", // middle gray
    },

    text: {
      base: "#343436",
      title: "#E1E1E6",
    },
    background: {
      default: "#f5f5f5",
      paper: "#fff",
      header: "rgb(235, 235, 235)"
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
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

    h4: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "2.5rem",
      },
    },

    h6: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
      },
    },

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
    },
    secondary: {
      light: "#2D2D2E", // gray
      main: "#121214", // black
      grayTwo: "#202024", // bold gray
      grayThree: "#29292E", // middle gray
    },
    text: {
      base: "#C4C4CC",
      title: "#E1E1E6",
    },
    background: {
      default: "#202024",
      paper: "#29292E",
      header: "#000000",
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
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

    h4: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "2rem",
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: "2.5rem",
      },
    },

    h6: {
      [theme.breakpoints.up('xs')]: {
        fontSize: "1rem",
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
      },
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
