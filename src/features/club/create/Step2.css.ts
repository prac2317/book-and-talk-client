import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingTop: '30px',
});

export const overviewWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});

export const title = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
});

export const nameInputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const nameInputTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const nameInput = style({
  height: '45px',
  width: 'inherit',
  padding: '5px 15px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',
  outline: 'none',

  selectors: {
    '&:focus': {
      outline: '1px solid black',
    },
  },
});

export const nameCount = style({
  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.light,
  textAlign: 'right',
});

export const descriptionInputSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const descriptionTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const descriptionInput = style({
  height: '100px',
  width: 'inherit',
  padding: '15px 15px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',
  outline: 'none',

  selectors: {
    '&:focus': {
      outline: '1px solid black',
    },
  },
});

export const descriptionCount = style({
  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.light,
  textAlign: 'right',
});

export const noticeSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const noticeTitle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '3px',

  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.regular,
});

export const lightBulbImage = style({
  width: '17px',
});

export const noticeBox = style({
  width: 'inherit',
  padding: '10px 30px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',

  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.regular,
  lineHeight: '25px',
});

export const primaryButton = style({
  width: '380px',
  height: '63px',
  backgroundColor: vars.colors.primary,
  color: 'white',
  fontSize: vars.font.size.headlineMedium,
  letterSpacing: '2px',
  border: '0',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.50)',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#2264b3',
      color: '#dad7d7',
    },
    '&:active': {
      transform: 'scale(0.97)',
      transition: '0.3s',
    },
  },
});
