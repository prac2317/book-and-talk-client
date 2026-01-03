import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const locationSearchBar = style({
    height: '45px',
    width: '380px',
    padding: '5px 15px',
    backgroundColor: vars.colors.surface,
    border: `1px solid ${vars.colors.border}`,
    borderRadius: '10px',
});
