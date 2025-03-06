import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
});

export const view = style({
  flex: 1,
  overflowY: 'auto',
  padding: '16px',
});
