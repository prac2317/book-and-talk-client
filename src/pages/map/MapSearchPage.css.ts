import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
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
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  backdropFilter: 'blur(8px)',
});

export const iconButton = style({
  background: 'none',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const title = style({
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.medium,
  color: 'white',
});

export const mapContainer = style({
  width: '100%',
  height: '50vh',
  position: 'relative',
  marginTop: '60px',
});

export const searchButtonContainer = style({
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 5,
});

export const searchButton = style({
  padding: '12px 30px',
  backgroundColor: vars.colors.surface,
  borderRadius: '25px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.3)',
  fontSize: '16px',
  fontWeight: vars.font.weight.semibold,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      backgroundColor: '#F0F0F0',
    },
    '&:active': {
      transform: 'scale(0.95)',
      transition: '0.2s',
    },
  },
});

export const resultsContainer = style({
  display: 'flex',
  flexDirection: 'column',
  padding: `20px ${vars.space.sectionPadding}`,
  overflowY: 'auto',
  flex: 1,
  gap: '15px',
});

export const resultsHeader = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '10px',
});

export const resultsTitle = style({
  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.medium,
});

export const resultsCount = style({
  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.light,
  color: '#666',
});

export const clubList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const loadMoreButton = style({
  padding: '10px 20px',
  backgroundColor: vars.colors.surface,
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  fontSize: '15px',
  fontWeight: vars.font.weight.medium,
  cursor: 'pointer',
  marginTop: '10px',

  selectors: {
    '&:hover': {
      backgroundColor: '#F0F0F0',
    },
    '&:active': {
      transform: 'scale(0.98)',
      transition: '0.2s',
    },
  },
});

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '200px',
  color: '#999',
  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.light,
});

export const locationInfo = style({
  backgroundColor: vars.colors.surface,
  padding: '15px 20px',
  borderRadius: '10px',
  border: `1px ${vars.colors.border} solid`,
  boxShadow: '0 4px 4px rgba(0, 0, 0, 0.1)',
  fontSize: vars.font.size.bodyMedium,
  fontWeight: vars.font.weight.light,
  marginBottom: '15px',
});
