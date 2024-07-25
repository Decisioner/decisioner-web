import { SxProps, Theme } from '@mui/material';

export const header: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  pr: 2,
  py: 1.5,
  gap: 5,
};

export const avatar: SxProps<Theme> = {
  width: 48,
  height: 48,
  cursor: 'pointer',
};
