import { globalStyle } from '@vanilla-extract/css';
import { vars } from './theme.css';

globalStyle('body', {
  fontFamily: vars.font.family,
  fontSize: vars.font.size.title,
  color: vars.colors.text.main,
  backgroundColor: vars.colors.background,
});
