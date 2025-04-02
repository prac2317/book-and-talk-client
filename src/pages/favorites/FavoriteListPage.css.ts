import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  paddingTop: "20px",
  paddingBottom: "20px",
  fontSize: vars.font.size.headlineMedium,
  fontWeight: vars.font.weight.semibold,
});

export const tabSection  = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  borderBottom: '1px solid #e0e0e0',
});

export const tab = style({
  padding: '8px 16px',
  color: '#666',
  background: 'none',
  border: 'none',
  width: "calc(100% / 2)",
  cursor: 'pointer',

  fontSize: vars.font.size.subTitle,
  fontWeight: vars.font.weight.semibold,
});

export const activeTab = style({
  color: '#333',
  borderBottom: '2px solid #333',
});

export const contentSection = style({
  paddingLeft: vars.space.sectionPadding,
  paddingRight: vars.space.sectionPadding,
});

export const bookContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  paddingTop: '25px',
});

export const clubContainer = style({
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    paddingTop: '25px',
}); 