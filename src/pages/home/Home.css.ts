import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '50px',
  width: vars.layout.width,
  backgroundColor: 'yellow',
});

export const searchSection = style({
  height: '50px',
  width: vars.layout.width,
  backgroundColor: 'aqua',
});

export const categoryContainer = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'beige',
});

export const categorySection = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: '1px solid black',
  width: 'inherit',
  height: '170px',
});

export const categoryTitle = style({});

export const bookContainer = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
});

export const book = style({
  width: '100px',
  height: '130px',
  backgroundColor: 'brown',
});
