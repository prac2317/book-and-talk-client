import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingBottom: '100px',
});

export const header = style({
  padding: '16px',
  backgroundColor: vars.colors.border,
  borderBottom: `1px solid ${vars.colors.border}`,
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
});

export const headerTitle = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.text.main,
});

export const messageList = style({
  flex: 1,
  overflow: 'auto',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const messageItem = style({
  display: 'flex',
  gap: '12px',
  border: '1px solid',
});

export const myMessage = style([
  messageItem,
  {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
    border: '2px solid yellow',
  },
]);

export const profileImage = style({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const messageContent = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const messageSender = style({
  fontSize: vars.font.size.bodySmall,
  color: vars.colors.text.main,
});

export const messageText = style({
  padding: '12px 16px',
  backgroundColor: vars.colors.background,
  borderRadius: '10px',
  fontSize: vars.font.size.bodyMedium,
  color: vars.colors.text.main,
});

export const myMessageText = style([
  messageText,
  {
    backgroundColor: vars.colors.primary,
    color: vars.colors.text.main,
  },
]);

export const messageTime = style({
  fontSize: vars.font.size.sm,
  color: vars.colors.text.main,
  alignSelf: 'flex-end',
});

export const inputContainer = style({
  padding: '16px',
  backgroundColor: vars.colors.border,
  borderTop: `1px solid ${vars.colors.border}`,
  display: 'flex',
  gap: '12px',
});

export const input = style({
  flex: 1,
  padding: '12px 16px',
  borderRadius: '10px',
  border: `1px solid ${vars.colors.border}`,
  fontSize: vars.font.size.bodyMedium,
  resize: 'none',
  ':focus': {
    outline: 'none',
    borderColor: vars.colors.primary,
  },
});

export const sendButton = style({
  padding: '12px 24px',
  backgroundColor: vars.colors.primary,
  color: vars.colors.text.main,
  border: 'none',
  borderRadius: '10px',
  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.medium,
  cursor: 'pointer',
  ':disabled': {
    backgroundColor: vars.colors.border,
    cursor: 'not-allowed',
  },
  // ':hover:not(:disabled)': {
  //   backgroundColor: vars.colors.primary,
  // },
});
