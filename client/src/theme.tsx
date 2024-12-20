import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      secondary: '#f1f2f3',
    },
    primary: {
      main: '#191919',
    },
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007aff',
    },
    text: {
      primary: '#fff',
      secondary: '#000',
    },
  },
});
