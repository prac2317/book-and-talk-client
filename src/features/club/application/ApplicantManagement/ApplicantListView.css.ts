import { style } from '@vanilla-extract/css';
import { vars } from '../../../../styles/global.css.ts';

export const applicantSection = style({
  display: 'flex',
  flexDirection: 'column',
  width: 'inherit',
});

export const applicantBox = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  height: '60px',
  width: 'inherit',
  borderBottom: `1px solid ${vars.colors.border}`,
  paddingLeft: vars.space.sectionPadding,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#f1f1f1',
    },
  },
});

export const nickname = style({
  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.semibold,
});
