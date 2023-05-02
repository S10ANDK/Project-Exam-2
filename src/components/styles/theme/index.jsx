import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accentOne: 'var(--color-accent-one)',
    accentTwo: 'var(--color-accent-two)',
    accentThree: 'var(--color-accent-three)',
    white: 'var(--color-white)',
    black: 'var(--color-black)',
  },
};

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
