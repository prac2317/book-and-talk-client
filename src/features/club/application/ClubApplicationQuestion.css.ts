import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const questionSection = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  gap: '40px',
});

export const noticeBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',
  width: 'inherit',
  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.extraLight,
});

export const noticeHeadline = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.medium,
});

export const clubNameBox = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'inherit',
  gap: '10px',

  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.regular,
});

export const clubNameHeadline = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const clubName = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '5px 15px',
  height: '55px',
  width: 'inherit',
  fontSize: vars.font.size.bodyLarge,
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',
});

export const questionBox = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'inherit',
  gap: '10px',

  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.light,
});

export const question = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
  whiteSpace: 'pre',
  lineHeight: '28px',
});

export const answerInput = style({
  height: '100px',
  width: 'inherit',
  padding: '5px 15px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',
});

export const textCount = style({
  fontSize: vars.font.size.bodySmall,
  fontWeight: vars.font.weight.regular,
  alignSelf: 'flex-end',
});

export const warningSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  marginTop: '100px',
});

export const warningWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const warning = style({
  padding: '15px 15px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',
  fontSize: vars.font.size.bodyMedium,
  lineHeight: '23px',
});
