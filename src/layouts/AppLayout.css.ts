import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
});

export const view = style({
  width: '430px',
  height: '100dh',
  border: '1px solid black',
});