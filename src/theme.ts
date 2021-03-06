// @ts-nocheck
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectTheme } from './store/ducks/theme/selectors';
const color = localStorage.getItem('theme')
console.log(color)
export const theme =  createTheme({
  typography: {
    fontFamily: ['Rubik', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h2: {
      fontWeight: 800,
      fontSize: 64,
      lineHeight: "80px",
    },
    h4: {
      fontWeight: 800,
      fontSize: 31,
      lineHeight: "40px",
    },
    h5: {
      fontWeight: 700,
      fontSize: 20
    },
    body1: {
      fontWeight: 600,
      fontSize: 16,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
      // color: '#536471'
    },
    button: {
      textTransform: "none"
    }
  },

  palette: {
    mode: 'light',
    ...('LIGHT'=== 'LIGHT'
      ? {
        primary: {
          main: 'rgb(29, 161, 242)',
          dark: 'rgb(26, 145, 218)',
          contrastText: '#fff',
        },
        secondary: {
          main: '#f7f9f9',
          dark: '#fff',
        },
        action: {
          main: '#fff',
          dark: '#f7f9f9',
        },
        background: {
          default: '#fff',
        },
        grey:  {
          light: '#536471',
          dark: '#74828C',
        },
        text: {
          primary: '#1d9bfo',
          secondary: '#000',
          lightBlue: 'rgb(29, 161, 242)',
          grey:  {
            light: '#536471',
            main: '#3f50b5',
            dark: '#74828C',
            contrastText: '#fff',
          }
        },
      }
      : {
        secondary: {
          main: '#16181C',
          dark: '#000',
        },
        text: {
          primary: '#fff',
          secondary: '#fff',
          lightBlue: 'rgb(29, 161, 242)',
          grey:  {
            light: '#474B4E',
            main: '#3f50b5',
            dark: '#74828C',
            contrastText: '#fff',
          }
        },
        background: {
          default: '#000',
        },
        grey:  {
          light: '#536471',
          dark: '#74828C',
        },
      }),




  },

  components: {

    MuiButton: {
      styleOverrides: {
        root: {
          height: 45,
          textTransform: 'none',
          borderRadius: 30,
          fontSize: 16,
          fontWeight: 700,
          "&.MuiButton-contained.MuiButton-containedInherit": {
            background: '#000',
            color: '#fff'
          },
          "&.MuiButton-outlined.MuiButton-outlinedSizeSmall": {
            height: 35,
          },
          "&.MuiButton-contained.MuiButton-sizeSmall": {
            height: 35,
          }
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
        }
      }
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '1px solid rgba(0, 0, 0, 0.04)'
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          minWidth: 500
        }
      }
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          height: 45,
          color: "black",
          textTransform: 'none',
          borderRadius: 50,
          fontSize: 16,
          fontWeight: 700,
        },

      },
    }
  },

  overrides: {
    MuiFormControl: {
      root: {
        width: "100%",
        borderRadius: 8,
        "& .MuiOutlinedInput-input": {
          borderRadius: 30,
          boxShadow: "0px 1px 0px #E2E8F0",
        },
      }
    },
    MuiFilledInput: {
      root: {
        border: "1px solid #e2e2e1",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#fcfcfb",
        "&:hover": {
          backgroundColor: "#fff"
        },
        "&$focused": {
          backgroundColor: "#fff",
        }
      }
    }

  }
});