import { createTheme } from '@mui/material';

const customTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#D9415D',
      contrastText: 'white',
    },
    secondary: {
      main: '#3B5F75',
      contrastText: 'white',
    },
    grey: {
      paper: '#FEFEFE',
      borders: '#C5C5C5',
    },
    background: {
      paper: '#FEFEFE',
      default: '#FEFEFE',
    },
  },
  typography: {
    h1: {
      fontFamily: "'Serenity', sans-serif",
      fontSize: '3rem',
      textTransform: 'lowercase',
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif",
    },
    p: {
      fontFamily: "'Open Sans', sans-serif",
    },
    button: {
      fontFamily: "'Serenity', sans-serif",
    },
  },
});

export default customTheme;
