import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: `0 ${vars.space.sectionPadding}`,
  paddingTop: '15px',
  height: '120px',
  width: vars.layout.width,
  // backgroundColor: 'yellow',
});

export const logoBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  // gap: '10px',
  // height: 'inherit',
});

export const logoImage = style({
  width: '80px',
});

export const logoText = style({
  width: '150px',
});

export const notification = style({
  width: '70px',
  transform: 'translateY(5px)',

  selectors: {
    '&:hover': {
      cursor: 'pointer',
    },
    '&:active': {
      transform: 'scale(0.95)',
      transition: 'transform 0.3s',
    },
  },
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

export const categoryBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '230px',
  width: vars.layout.width,
  paddingLeft: '20px',
});

export const categorySideDecoration = style({
  height: '210px',
  width: '14px',
  backgroundColor: vars.colors.primary,
  borderRadius: '5px 0 0 5px',
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  height: 'inherit',
  paddingTop: '25px',
  paddingLeft: '30px',

  backgroundColor: vars.colors.surface,
  border: `1px ${vars.colors.border} solid`,
  borderRadius: '8px',

  overflow: 'scroll',
});

export const categoryTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const bookBoxContainer = style({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '10px',
  paddingTop: '5px',
  paddingBottom: '20px',
  gap: '30px',
  width: vars.layout.width,
  height: 'inherit',
});

export const bookBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1px',

  height: '150px',

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
  width: '85px',
  height: 'auto',
});

export const bookTitle = style({
  width: '85px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  textAlign: 'center',

  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.extraLight,
});
