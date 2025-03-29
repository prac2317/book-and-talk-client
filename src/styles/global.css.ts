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
    family: 'Pretendard, sans-serif',
    weight: {
      extraLight: '200',
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      title: '700',
    },
    size: {
      headlineMedium: '24px',
      subTitle: '16px',
      bodyLarge: '16px',
      bodyMedium: '14px',
      bodySmall: '13px',

      sm: '15px',
      title: '25px',
    },
  },
  layout: {
    width: '430px',
    bookCardWith: '380px',
  },
  space: {
    sectionPadding: '25px',
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
  src: "url('fonts/Pretendard-Thin.woff') format('woff')",
  fontWeight: 100,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-ExtraLight.woff') format('woff')",
  fontWeight: 200,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Light.woff') format('woff')",
  fontWeight: 300,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Regular.woff') format('woff')",
  fontWeight: 400,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Medium.woff') format('woff')",
  fontWeight: 500,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-ExtraBold.woff') format('woff')",
  fontWeight: 600,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Bold.woff') format('woff')",
  fontWeight: 700,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-ExtraBold.woff') format('woff')",
  fontWeight: 800,
});

globalFontFace('Pretendard', {
  src: "url('fonts/Pretendard-Black.woff') format('woff')",
  fontWeight: 900,
});
