import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  padding: `25px ${vars.space.sectionPadding} 40px ${vars.space.sectionPadding} `,
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '50px',
});

export const xButton = style({
  width: '35px',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const stepSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
});
