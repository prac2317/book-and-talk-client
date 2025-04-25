import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const clubCard = style({
  display: 'flex',
  flexDirection: 'row',
  padding: '15px',
  gap: '20px',
  width: `calc(${vars.layout.width} - ${vars.space.sectionPadding} * 2)`,
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