import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const bookCard = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  height: '200px',
  width: vars.layout.bookCardWith,
  padding: '30px',

  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',

});

export const bookThumbnail = style({
  width: '100px',
});

export const bookOverview = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '5px',
  width: '150px',
});

export const bookTitle = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.medium,
});

export const author = style({
  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.medium,
});

export const publisher = style({
  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.light,
});

export const clickable = style({
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  selectors: {
    '&:hover': {
      backgroundColor: '#F0F0F0',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    },
  },
});
