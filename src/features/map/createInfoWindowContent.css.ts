import { style } from '@vanilla-extract/css';
import { vars } from '../../styles/global.css.ts';

export const container = style({
    background: 'white',
    border: '1px black solid',
    padding: '16px',
    minWidth: '200px',
    maxWidth: '300px',
});

export const title = style({
    margin: 0,
    fontSize: '14px',
});
