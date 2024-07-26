import { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = Pick<
  MUIButtonProps,
  'variant' | 'type' | 'onClick' | 'disabled' | 'sx'
> & {
  color?: ButtonColor;
  children: React.ReactNode;
};

export enum ButtonColor {
  PRIMARY = 'primary',
  GRAY = 'gray',
  RED = 'red',
  GREEN = 'green',
}
