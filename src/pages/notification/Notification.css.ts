import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  width: 'inherit',
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '70px',
  width: 'inherit',
  padding: '16px 30px',
  borderBottom: `1px solid ${vars.colors.border}`,
});

export const title = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
  marginBottom: '20px',
  color: vars.colors.text.main,
});

export const notificationList = style({
  display: 'flex',
  flexDirection: 'column',
  // gap: '12px',
});

export const notificationItem = style({
  display: 'flex',
  padding: '16px',
  backgroundColor: vars.colors.surface,
  // border: `0.2px solid ${vars.colors.border}`,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: vars.colors.background,
    borderColor: vars.colors.border,
  },
});
