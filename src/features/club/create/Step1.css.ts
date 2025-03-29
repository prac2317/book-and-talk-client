import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '30px',
  gap: '10px',
});

export const title = style({
  fontSize: vars.font.size.title,
});
