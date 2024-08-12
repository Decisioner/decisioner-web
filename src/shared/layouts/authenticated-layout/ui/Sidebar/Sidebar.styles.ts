import { SxProps, Theme } from '@mui/material';

export const sidebar = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  p: 2,
  height: '100%',
  gap: 2,

  ...(isMobile && {
    position: 'fixed',
    top: '80px',
    left: 0,
    width: '100%',
    height: 'calc(100vh - 80px)',
    backgroundColor: 'white.main',
    zIndex: 100,
  }),
});

export const nav: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
};
