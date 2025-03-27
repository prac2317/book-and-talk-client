import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',

  padding: `25px ${vars.space.sectionPadding}`,
  paddingBottom: '40px',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  height: '50px',
});

// 시멘틱한 이미지 버튼 만들기 위해 버튼 초기화
export const iconButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const xButton = style({
  width: '35px',
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const primaryButton = style({
  width: '380px',
  height: '63px',
  backgroundColor: vars.colors.primary,
  color: 'white',
  fontSize: vars.font.size.headlineMedium,
  letterSpacing: '2px',
  border: '0',
  borderRadius: '10px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.50)',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#2264b3',
      color: '#dad7d7',
    },
    '&:active': {
      transform: 'scale(0.97)',
      transition: '0.3s',
    },
  },
});
