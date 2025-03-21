import { createGlobalTheme, globalFontFace, globalStyle } from '@vanilla-extract/css';

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
  layout: {
    width: '430px',
  },
});

globalStyle('*', {
  padding: 0,
  margin: 0,
  boxSizing: 'border-box',
});

globalStyle('body', {
  fontFamily: vars.font.family,
  fontSize: vars.font.size.sm,
  letterSpacing: '-1px',
  color: vars.colors.text.main,
  // backgroundColor: vars.colors.background,
  backgroundColor: '#F5F5F5',
  overscrollBehaviorY: 'none',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-ExtraLight.woff') format('woff')",
  fontWeight: 100,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 200,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 300,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 400,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 500,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 600,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 700,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 800,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 900,
});
