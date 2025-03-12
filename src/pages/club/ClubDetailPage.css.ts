import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  // alignItems: 'center',
  width: vars.layout.width,
  height: '50px',
  position: 'fixed',
});

export const actionButtons = style({
  display: 'flex',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 20px',
});

export const pictureBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '200px',
  backgroundColor: vars.colors.surface,
});

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  height: '50px',
  backgroundColor: '#474747',
  color: 'white',

  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const overviewSection = style({
  width: '100%',
  marginTop: '20px',
});

export const overviewBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  backgroundColor: vars.colors.surface,
  marginTop: '10px',
  padding: '20px 20px',
  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const bookTitle = style({
  display: 'flex',
});

export const startDate = style({
  display: 'flex',
});

export const member = style({
  display: 'flex',
});

export const descriptionSection = style({
  marginTop: '20px',
  width: '100%',
});

export const descriptionBox = style({
  backgroundColor: vars.colors.surface,
  marginTop: '10px',
  padding: '20px 20px',
  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const membersSection = style({
  marginTop: '20px',
  width: '100%',
});

export const membersBox = style({
  backgroundColor: vars.colors.surface,
  marginTop: '10px',
  padding: '20px 20px',
  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const locationSection = style({
  marginTop: '20px',
  width: '100%',
});

export const locationBox = style({
  height: '200px',
  marginTop: '10px',
  backgroundColor: 'antiquewhite',
});

export const buttonSection = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: '20px',
  marginBottom: '20px',
  width: '100%',
});
