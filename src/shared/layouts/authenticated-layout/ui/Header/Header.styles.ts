import { SxProps, Theme } from '@mui/material';

export const header = (isMobile: boolean): SxProps<Theme> => ({
  display: 'flex',
  alignItems: 'center',
  ...(!isMobile && {
    pr: 2,
    py: 1.5,
    gap: 5,
  }),

  ...(isMobile && {
    justifyContent: 'space-between',
    p: 2,
  }),
});

export const avatar: SxProps<Theme> = {
  width: 48,
  height: 48,
  cursor: 'pointer',
};
