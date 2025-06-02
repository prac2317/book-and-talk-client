import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  width: 'inherit',
  height: '100vh',
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
});

export const notificationItem = style({
  display: 'flex',
  padding: '16px',
  backgroundColor: vars.colors.surface,
  cursor: 'pointer',
});

export const notificationItemUnread = style({
  backgroundColor: vars.colors.background,
});
