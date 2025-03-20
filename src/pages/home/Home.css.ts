import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20px',
  paddingTop: '15px',
  height: '120px',
  width: vars.layout.width,
  // backgroundColor: 'yellow',
});

export const logoImage = style({
  width: '80px',
});

export const logoText = style({
  width: '150px',
});

export const notification = style({
  width: '70px',
});

export const searchSection = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100px',
  width: vars.layout.width,
});

export const categorySection = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '30px',
  gap: '50px',
  width: vars.layout.width,
});

export const categoryWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '270px',
  width: vars.layout.width,
  paddingLeft: '20px',
});

export const categoryDecoration = style({
  height: '250px',
  width: '14px',
  backgroundColor: vars.colors.primary,
  borderRadius: '5px 0 0 5px',
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingTop: '25px',
  paddingLeft: '30px',

  backgroundColor: vars.colors.surface,
  border: `1px ${vars.colors.border} solid`,
  borderRadius: '8px',

  overflow: 'scroll',
});

export const categoryTitle = style({
  fontSize: '20px',
  fontWeight: vars.font.weight.normal,
});

export const bookContainer = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '10px',
  paddingTop: '5px',
  paddingBottom: '20px',
  gap: '30px',
  width: vars.layout.width,
  height: 'inherit',
});

export const book = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1px',

  selectors: {
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: 'transform 0.3s',
      cursor: 'pointer',
    },
    '&:active': {
      transform: 'scale(0.95)',
      transition: 'transform 0.3s',
    },
  },
});

export const bookImage = style({
  width: '110px',
  height: 'auto',
});

export const bookTitle = style({
  width: '100px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  fontSize: vars.font.size.sm,
});
