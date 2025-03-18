import { style } from '@vanilla-extract/css';
import { vars } from '../styles/global.css.ts';

export const nav = style({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  width: '430px',
  height: '60px',
  position: 'fixed',
  bottom: 0,
  backgroundColor: vars.colors.background,
  borderTop: '1px solid #ddd',
});

export const navItem = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'gray',
  fontSize: '14px',
  cursor: 'pointer',
});

export const active = style({
  color: 'black',
  fontWeight: 'bold',
});
