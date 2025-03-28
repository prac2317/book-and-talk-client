import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const detailSection = style({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: vars.layout.width,
  padding: vars.space.sectionPadding,
  paddingBottom: '100px',
});

export const answerSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const profileWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

export const questionTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const question = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.regular,
  whiteSpace: 'pre',
  lineHeight: '28px',
});

export const answer = style({
  height: '100px',
  width: 'inherit',
  padding: '15px 15px',

  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.regular,
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',

  whiteSpace: 'pre',
});

export const buttonGroup = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px',
});

export const approveButton = style({
  height: '50px',
  width: '150px',
  padding: '8px 16px',
  borderRadius: '10px',
  border: 0,
  boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  color: 'white',
  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.semibold,
  cursor: 'pointer',

  background: vars.colors.primary,
});

export const rejectButton = style({
  height: '50px',
  width: '150px',
  padding: '8px 16px',
  borderRadius: '10px',
  border: 0,
  boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
  color: 'black',
  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.semibold,
  cursor: 'pointer',

  background: vars.colors.surface,
});
