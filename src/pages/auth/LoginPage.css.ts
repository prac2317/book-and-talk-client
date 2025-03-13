import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: vars.layout.width,
  padding: '0 50px',
});

export const logoImage = style({
  marginTop: '200px',
  width: '260px',
  height: 'auto',
});

export const loginForm = style({
  marginTop: '20px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  width: '100%',
  padding: '10px',
});

export const input = style({
  width: '100%',
  height: '40px',
  // color: vars.colors.border,
  padding: '8px 15px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '5px',

  selectors: {
    '&::placeholder': {
      color: '#aaaaaa',
    },
    '&:focus': {
      outline: `none`,
    },
  },
});

export const loginButton = style({
  width: '100%',
  height: '40px',
  marginTop: '10px',
  // fontSize: vars.font.size.title,
  fontSize: '18px',
  color: '#ffffff',
  backgroundColor: vars.colors.primary,
  border: `1px solid ${vars.colors.primary}`,
  borderRadius: '5px',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#1c68db',
    },
    '&:active': {
      backgroundColor: '#1752b5',
      transform: 'scale(0.97)',
    },
  },
});

export const authButtons = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '10px',
  color: '#aaaaaa',
});
