import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: '#19714b',
  },
  font: {
    body: 'arial',
  },
});
