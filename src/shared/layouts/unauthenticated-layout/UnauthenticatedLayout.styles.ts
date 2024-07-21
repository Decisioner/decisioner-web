import { SxProps, Theme } from '@mui/material';

export const leftBlock = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  backgroundColor: 'gray.light',
  paddingLeft: isMobile ? 2 : 6,
  paddingTop: 2,
});

export const rightBlock = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  paddingLeft: isMobile ? 2 : 6,
  paddingTop: 2,
  backgroundColor: 'white',
});

export const rightBlockHeader = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  marginBottom: 2,
  width: '100%',
  maxWidth: isMobile ? '100%' : '400px',
});
