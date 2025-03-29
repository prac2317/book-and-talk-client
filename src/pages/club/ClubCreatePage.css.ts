import { style } from '@vanilla-extract/css';
import { vars } from '../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 25px',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '50px',
  border: '1px solid black',
});

export const stepSection = style({
  display: 'flex',
  flexDirection: 'column',
});
