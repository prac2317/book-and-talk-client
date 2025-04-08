import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '25px', 
});

export const title = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
  marginBottom: '20px',
  color: vars.colors.text.main,
});

export const chatList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const chatItem = style({
  display: 'flex',
  padding: '16px',
  borderRadius: '10px',
  backgroundColor: vars.colors.border,
  border: `1px solid ${vars.colors.border}`,
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  ':hover': {
    backgroundColor: vars.colors.background,
    borderColor: vars.colors.border,
  },
});

export const profileImage = style({
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  marginRight: '16px',
  objectFit: 'cover',
});

export const chatInfo = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
});

export const chatHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const chatName = style({
  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.semibold,
  color: vars.colors.text.main,
});

export const chatTime = style({
  fontSize: vars.font.size.bodySmall,
  color: vars.colors.text.main,
});

export const chatMessage = style({
  fontSize: vars.font.size.bodyMedium,
  color: vars.colors.text.main,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const unreadCount = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '20px',
  height: '20px',
  padding: '0 6px',
  borderRadius: '10px',
  backgroundColor: vars.colors.primary,
  color: vars.colors.text.main,
  fontSize: vars.font.size.sm,
  fontWeight: vars.font.weight.medium,
  marginLeft: '8px',
}); 