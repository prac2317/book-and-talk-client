import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
});

export const searchBarSection = style({
  display: 'flex',
  flexDirection: 'row',
  gap: '2px'
})

export const backButton = style({
  width: '50px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const locationSearchBar = style({
  height: '45px',
  width: '380px',
  padding: '5px 15px',
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '10px',
  outline: 'none'
})

export const searchButton = style({
  width: '50px',
  backgroundColor: vars.colors.surface,
  border: `1px solid ${vars.colors.border}`,
  borderRadius: '8px',
})

export const searchResultSection = style({
  display: 'flex',
  flexDirection: 'column',
  maxHeight: '600px',
  overflow: 'auto'
})

