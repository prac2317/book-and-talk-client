import { style } from '@vanilla-extract/css';
import { vars } from '../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
});

export const view = style({
  width: vars.layout.width,
  height: '100dh',
  border: '1px solid black',
});
