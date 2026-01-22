import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
})

export const locationSearchBar = style({
    height: '45px',
    width: '380px',
    padding: '5px 15px',
    backgroundColor: vars.colors.surface,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: '10px',
    outline: 'none'
});

export const map = style({
    width: '100%',
    height: '400px',
})
