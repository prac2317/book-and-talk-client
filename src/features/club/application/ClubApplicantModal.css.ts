import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '75vh',
  width: vars.layout.width,
  position: 'fixed',
  bottom: '0',
  backgroundColor: 'white',
  borderRadius: '10px 10px 10px 10px',
  border: `1px solid ${vars.colors.border}`,
  transition: 'transform 0.3s ease-out',
});

export const hidden = style({
  transform: 'translateY(100%)',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
  position: 'relative',
  height: '67px',
  width: 'inherit',
  paddingLeft: vars.space.sectionPadding,
  borderBottom: `1px solid ${vars.colors.border}`,
  cursor: 'pointer',
});

export const title = style({
  flex: 1,
  textAlign: 'center',
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.medium,
});
