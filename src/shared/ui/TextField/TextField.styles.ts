import { SxProps, Theme } from '@mui/material';

export const formField: SxProps<Theme> = {
  '.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    border: '2px solid',
    borderColor: 'gray.600',
  },
  '.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'primary.main',
  },
  '.MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: 'red.main',
  },
  '.MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
    borderColor: 'gray.700',
  },

  '.MuiFormLabel-root': {
    color: 'gray.main',
  },
  '.MuiFormLabel-root.Mui-focused': {
    color: 'primary.main',
  },
  '.MuiFormLabel-root.Mui-error': {
    color: 'red.main',
  },
  '.MuiFormLabel-root.Mui-disabled': {
    color: 'gray.600',
  },

  svg: {
    color: 'primary.main',
  },
};

export const input: SxProps<Theme> = {
  color: 'gray.main',
  borderRadius: 3,
};
