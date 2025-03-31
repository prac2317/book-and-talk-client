import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingTop: '30px',
});

export const inputWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});

export const headlineTitle = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
});

export const selectSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const selectTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  flexWrap: 'wrap',
});

export const selectButton = style({
  width: '80px',
  height: '45px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.regular,

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.border,
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    },
    '&:active': {
      transform: 'scale(0.9)',
      transition: '0.3s',
    },
  },
});

export const countInput = style({
  width: '160px',
  height: '45px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
  padding: '10px',
  outline: 'none',

  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.regular,

  selectors: {
    '&:focus': {
      outline: '1px solid black',
    },
  },
});

export const answerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const answerTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const answerInput = style({
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

export const answerCount = style({
  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.light,
  textAlign: 'right',
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
