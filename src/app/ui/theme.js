'use client';
import { createTheme } from '@mui/material';

const paper = '#fff';
const text = {
  main: '#404040',
  dark: '#1f1f1f',
  light: '#bbbbbb',
  contrastText: '#fff',
};

const grey = {
  700: '#5f5f5f',
  600: '#727272',
  500: '#9b9b9b',
  400: '#bbbbbb',
  300: '#dedede',
  200: '#ececec',
  100: '#f4f4f4',
  50: '#fafafa',
};
const primary = {
  main: '#A00000',
  dark: '#af120e',
  light: '#da4439',
  contrastText: '#fff',
};

const secondary = {
  main: '387C2B',
  dark: '#245d1a',
  light: '#88c67e',
  contrastText: '#fff',
};

const theme = createTheme({
  // spacing: 2,
  palette: {
    paper,
    primary,
    secondary,
    error: {
      main: '#ff3317',
      light: '#ff5e3d',
      dark: '#e3200b',
    },
    text,
    grey,
  },
  typography: {
    h6: {
      fontWeight: 400,
      color: text['dark'],
      fontSize: '0.75rem',
    },
    h5: {
      fontSize: '0.875rem',
      color: text['dark'],
      fontWeight: 400,
    },
    h4: {
      fontSize: '1rem',
      color: text['dark'],
      fontWeight: 700,
    },
    h3: {
      fontSize: '1.25rem',
      color: text['dark'],
      fontWeight: 700,
      // '@media (min-width:600px)': {
      //   fontSize: '1.5rem',
      // },
      // [theme.breakpoints.up('md')]: {
      //   fontSize: '2.4rem',
      // },
    },
    h2: {
      fontSize: '1.5rem',
      color: text['dark'],
      fontWeight: 700,
    },
    h1: {
      fontSize: '2.125rem',
      color: text['dark'],
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: '0.875rem',
      fontWeight: 700,
      color: text['main'],
    },
    subtitle2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: text['main'],
    },
    caption: {
      fontSize: '0.75rem',
      color: text['main'],
      fontWeight: 400,
    },
    body1: {
      fontSize: '0.875rem',
      color: text['main'],
      fontWeight: 400,
      lineHeight: '1.334em',
    },
    body2: {
      letterSpacing: '0em',
      fontWeight: 400,
      color: text['main'],
      lineHeight: '1.5em',
    },
    button: {
      textTransform: 'capitalize',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: '4px',
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
        rounded: {
          borderRadius: '12px',
        },
      },
    },
    MuiCardHeader: {
      styleOverrides: {
        root: {
          color: text['main'],
          padding: '24px',
        },
        title: {
          fontSize: '1.125rem',
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          alignItems: 'center',
        },
        outlined: {
          border: '1px dashed',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: text['main'],
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          color: text['main'],
          '&::placeholder': {
            color: '#c5c5c5',
            fontSize: '0.875rem',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          background: grey[50],
          borderRadius: '12px',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: grey[400],
          },
          '&:hover $notchedOutline': {
            borderColor: primary['light'],
          },
          '&.MuiInputBase-multiline': {
            padding: 1,
          },
        },
        input: {
          fontWeight: 500,
          background: grey[50],
          padding: '15.5px 14px',
          borderRadius: '12px',
          '&.MuiInputBase-inputSizeSmall': {
            padding: '10px 14px',
            '&.MuiInputBase-inputAdornedStart': {
              paddingLeft: 0,
            },
          },
        },
        inputAdornedStart: {
          paddingLeft: 4,
        },
        notchedOutline: {
          borderRadius: '12px',
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          '&:focus': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          /** checked not prop
           *"&.Mui-checked": {
           *    fontSize: "28px"
           *}
           */
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-deletable .MuiChip-deleteIcon': {
            color: 'inherit',
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          padding: '12px 0 12px 0',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: paper,
          background: grey[700],
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: '1.25rem',
        },
      },
    },
  },
});

export default theme;
