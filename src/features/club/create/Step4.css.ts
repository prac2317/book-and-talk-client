import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  paddingTop: '30px',
});

export const dateWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
});

export const dateTitle = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
});

export const startDateSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const startDateTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const durationSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '100%',
});

export const durationTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
  flexWrap: 'wrap',
});

export const durationButton = style({
  width: '80px',
  height: '45px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  fontSize: vars.font.size.bodyLarge,

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
