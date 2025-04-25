import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  height: '100vh',
  width: '430px',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: '70px',
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  top: 0,
  height: '70px',
  width: 'inherit',
  padding: '16px 30px',
  borderBottom: `1px solid ${vars.colors.border}`,
});

export const backIcon = style({
  cursor: 'pointer',
});

export const headerTitle = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.text.main,
});

export const searchGlassIcon = style({
  width: '35px',
  height: '35px',
  cursor: 'pointer',
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
  alignItems: 'center',
});

export const myMessage = style([
  messageItem,
  {
    flexDirection: 'row-reverse',
    alignSelf: 'flex-end',
  },
]);

export const profileImage = style({
  width: '50px',
  height: '50px',
  borderRadius: '50%',
  objectFit: 'cover',
});

export const messageContent = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '4px',
});

export const messageSender = style({
  fontSize: vars.font.size.bodySmall,
  color: vars.colors.text.main,
});

export const messageText = style({
  padding: '12px 16px',
  backgroundColor: vars.colors.surface,
  borderRadius: '15px',
  fontSize: vars.font.size.bodyMedium,
  color: vars.colors.text.main,
  maxWidth: '300px',
  whiteSpace: 'pre-wrap',
});

export const myMessageText = style([
  messageText,
  {
    backgroundColor: vars.colors.primary,
    color: 'white',
  },
]);

export const messageTime = style({
  fontSize: vars.font.size.bodySmall,
  color: vars.colors.border,
  alignSelf: 'flex-end',
});

export const inputContainer = style({
  padding: '16px',
  borderTop: `1px solid ${vars.colors.border}`,
  display: 'flex',
  gap: '12px',
});

export const input = style({
  flex: 1,
  padding: '12px 16px',
  borderRadius: '15px',
  border: `1px solid ${vars.colors.border}`,
  backgroundColor: vars.colors.border,
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
