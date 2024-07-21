import { Color } from '@mui/material';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface SimplePaletteColorOptions {
    logo?: string;
  }

  interface PaletteColor extends Color {}

  interface Palette {
    gray: Palette['primary'];
    green: Palette['primary'];
    red: Palette['primary'];
    white: Palette['primary'];
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
    green?: PaletteOptions['primary'];
    red?: PaletteOptions['primary'];
    white?: PaletteOptions['primary'];
  }
}
