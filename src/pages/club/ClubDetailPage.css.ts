import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
  position: 'relative',
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  top: '0',
  width: vars.layout.width,
  padding: '25px 25px 25px 25px',
  height: '60px',
  position: 'fixed',
  zIndex: 10,
});

export const headerBackgroundColor = style({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(8px)',
  transition: 'background-color 0.3s, backdrop-filter 0.3s',
});

export const actionButtons = style({
  display: 'flex',
  gap: '15px',
});

// 시멘틱한 이미지 버튼 만들기 위해 버튼 초기화
export const iconButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const pictureBox = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: vars.layout.width,
  height: '200px',
  backgroundColor: vars.colors.surface,
  objectFit: 'cover',
});

export const titleSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  position: 'absolute',
  top: '160px',
  left: '20px',

  height: '80px',
  width: `calc(${vars.layout.width} - 40px)`,
  backgroundColor: '#474747',

  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.medium,
  letterSpacing: '0',
  color: 'white',

  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: '#474747',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const contentsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: `45px ${vars.space.sectionPadding} 0 ${vars.space.sectionPadding}`,
  gap: '12px',
});

export const overviewTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const overviewSection = style({
  width: '100%',
  marginTop: '20px',
});

export const overviewBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '5px',

  backgroundColor: vars.colors.surface,
  marginTop: '10px',
  padding: '20px 20px',
  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const bookTitle = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

export const startDate = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

export const memberCount = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '10px',
});

export const descriptionSection = style({
  marginTop: '20px',
  width: '100%',
});

export const descriptionTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const descriptionBox = style({
  backgroundColor: vars.colors.surface,
  marginTop: '10px',
  padding: '20px 20px',

  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.light,
  letterSpacing: '0.5px',
  lineHeight: '17px',

  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
  whiteSpace: 'pre-wrap',
});

export const membersSection = style({
  marginTop: '20px',
  width: '100%',
});

export const memberTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const membersBox = style({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: vars.colors.surface,
  marginTop: '10px',
  padding: '20px 20px',
  gap: '5px',

  fontSize: vars.font.size.bodyLarge,
  fontWeight: vars.font.weight.light,

  borderRadius: '10px',
  borderStyle: 'solid',
  borderColor: 'rgba(230, 231, 231, 0.7)',
  borderWidth: '0.5px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
});

export const member = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '5px',
});

export const memberProfileImage = style({
  width: '20px',
});

export const memberHostImage = style({
  marginTop: '3px',
  width: '15px',
});

export const locationSection = style({
  marginTop: '20px',
  // width: 'inherit',
});

export const locationTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const locationImage = style({
  // height: '200px',
  width: `calc(${vars.layout.width} - ${vars.space.sectionPadding} - ${vars.space.sectionPadding})`,
  marginTop: '10px',
  backgroundColor: 'antiquewhite',
  borderRadius: '10px',
});

export const buttonSection = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  // marginTop: '20px',
  // marginBottom: '20px',
  padding: '20px 0 80px 0',
  width: '100%',
});

export const button = style({
  padding: '8px 16px',
  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 5px 5px rgba(0, 0, 0, 0.3)',
  fontSize: '17px',
  fontWeight: vars.font.weight.semibold,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#F0F0F0',
      // boxShadow: '0 6px 10px rgba(0, 0, 0, 0.15)',
    },
    '&:active': {
      transform: 'scale(0.9)',
      transition: '0.3s',
    },
  },
});

export const overlay = style({
  position: 'absolute',
  width: vars.layout.width,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  top: 0,
  left: 0,
  right: 0,
  // transform: 'translateX(-50%)',
  transition: 'transform 0.3s ease-out',
  bottom: 0,
});
