import { createGlobalTheme, globalStyle } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#3182F6',
    background: '#FFFFFF',
    surface: '#FAFAFB',
    border: '#E6E7E7',
    text: {
      main: '#262626',
    },
  },
  font: {
    family: 'Pretender, sans-serif',
    weight: {
      thin: '200',
      normal: '500',
    },
    size: {
      sm: '15px',
      title: '25px',
    },
  },
});

globalStyle('*', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
});

globalStyle('body', {
  fontFamily: vars.font.family,
  fontSize: vars.font.size.title,
  color: vars.colors.text.main,
  backgroundColor: vars.colors.background,
});
