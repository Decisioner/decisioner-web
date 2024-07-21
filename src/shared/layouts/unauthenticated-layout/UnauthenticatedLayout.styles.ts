import { SxProps, Theme } from '@mui/material';

export const leftBlock = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  backgroundColor: 'gray.light',
  paddingLeft: isMobile ? 2 : 6,
  paddingTop: 8,
});

export const rightBlock = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  paddingInline: isMobile ? 2 : 6,
  paddingTop: 8,
  backgroundColor: 'white',
});

export const rightBlockHeader = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
  maxWidth: isMobile ? '100%' : '400px',
});

export const formContainer = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  width: '100%',
  height: '100%',
  justifyContent: isMobile ? undefined : 'center',
  paddingBottom: 4,
});
