import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  height: '50px',
  paddingLeft: '25px',
});

export const bookSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '25px',
  height: '500px',
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

export const bookDescriptionCard = style({
  display: 'flex',
  flexDirection: 'column',
  // height: '150px',
});

export const bookDescription = style({
  maxHeight: '200px',
  padding: '20px',
  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  letterSpacing: '0',
  lineHeight: '25px',
  fontSize: '17px',
  fontWeight: vars.font.weight.thin,

  display: '-webkit-box',
  WebkitLineClamp: '7',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const clubSection = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 25px 25px 25px',
});

export const clubSectionHeader = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '30px',
});

export const clubCreateButton = style({
  width: '130px',
  height: '40px',
  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)',
  fontSize: '17px',
  fontWeight: vars.font.weight.normal,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#F0F0F0',
      // boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      transform: 'scale(0.9)',
      transition: '0.3s',
    },
  },
});

export const clubContainer = style({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '25px',
});

export const clubCard = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '15px',
  gap: '20px',
  width: 'inherit',
  height: '150px',
  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease-in-out',

  selectors: {
    '&:hover': {
      backgroundColor: '#F0F0F0',
      boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    },
  },
});

export const clubThumbnail = style({
  width: '100px',
});

export const clubOverview = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});
