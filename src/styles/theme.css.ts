import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  colors: {
    primary: '#3182F6',
    background: '#555555',
    surface: '#FAFAFB',
    border: '#E6E7E7',
    text: {
      main: '#262626',
    },
  },
  font: {
    family: 'Pretendard, sans-serif',
    weight: {
      thin: '200',
      normal: '500',
      bold: '700',
    },
    size: {
      sm: '15px',
      title: '25px',
    },
  },
});
