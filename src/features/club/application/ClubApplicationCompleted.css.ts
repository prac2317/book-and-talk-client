import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '30px',
});

export const completeMessage = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
  width: vars.layout.width,
  paddingLeft: vars.space.sectionPadding,
});

export const logo = style({
  width: '420px',
  marginTop: '180px',
});
