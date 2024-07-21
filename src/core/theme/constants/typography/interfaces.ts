import { CSSProperties } from 'react';

import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    h2Medium: CSSProperties;
  }

  interface TypographyVariantsOptions {
    h2Medium?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    h2Medium: true;
  }
}
