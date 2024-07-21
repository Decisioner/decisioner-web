import { SxProps, Theme } from '@mui/material';
import { ButtonColor, ButtonProps } from './Button.props';

export const button = (
  color: ButtonColor,
  variant: ButtonProps['variant']
): SxProps<Theme> => ({
  boxShadow: 'none',
  borderRadius: 3,
  fontFamily: 'Nunito',
  fontWeight: 400,
  fontSize: '16px',
  textTransform: 'none',
  transition: 'all 0.2s ease-in-out',
  border: 'none',
  paddingBlock: '12px',
  paddingInline: 3,

  ...(color === ButtonColor.PRIMARY && {
    backgroundColor: 'primary.main',
    color: 'white.main',
    '&:hover': {
      backgroundColor: 'primary.200',
    },
  }),

  ...(color === ButtonColor.GRAY && {
    backgroundColor: 'gray.light',
    color: 'primary.main',
    '&:hover': {
      backgroundColor: 'gray.700',
    },
  }),

  ...(color === ButtonColor.RED && {
    backgroundColor: variant === 'outlined' ? 'transparent' : 'red.main',
    color: variant === 'outlined' ? 'red.main' : 'white.main',
    outline: variant === 'outlined' ? '1px solid' : 'none',
    '&:hover': {
      backgroundColor: variant === 'outlined' ? 'red.main' : 'red.200',
      color: 'white.main',
      outline: 'none',
      border: 'none',
    },
  }),

  ...(color === ButtonColor.GREEN && {
    backgroundColor: 'green.main',
    color: 'white.main',
    '&:hover': {
      backgroundColor: 'green.200',
    },
  }),
});
