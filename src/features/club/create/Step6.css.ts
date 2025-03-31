import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
  paddingTop: '30px',
});

export const completeMessage = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
  width: vars.layout.width,
  paddingLeft: vars.space.sectionPadding,
});

export const logo = style({
  width: '420px',
  marginTop: '180px',
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
