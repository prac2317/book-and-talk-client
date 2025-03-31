import { style } from '@vanilla-extract/css';
import { vars } from '../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100vw',
  minHeight: '100vh',
});

export const view = style({
  width: vars.layout.width,
  height: '100vh',
  border: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.background,
});
