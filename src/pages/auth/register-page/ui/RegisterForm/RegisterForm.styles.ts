import { SxProps, Theme } from '@mui/material';

export const form = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  paddingRight: isMobile ? 2 : 6,
});
