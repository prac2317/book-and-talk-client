import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const bookSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  // height: '500px',
  padding: '25px 25px',
  borderBottom: '2px #EEEEEE solid ',
});

export const bookCard = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  height: '200px',
  padding: '30px',
  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
});

export const bookThumbnail = style({
  width: '100px',
  // height: 'auto',
});

export const bookOverview = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '150px',
});

export const bookTitle = style({
  fontSize: vars.font.size.title,
  fontWeight: vars.font.weight.normal,
});
