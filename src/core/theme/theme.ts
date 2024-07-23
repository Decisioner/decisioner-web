import { createTheme } from '@mui/material/styles';

import customPalette from './constants/palette';
import customTypography from './constants/typography';

const theme = createTheme({
  palette: customPalette,
  typography: customTypography,
});

export default theme;
