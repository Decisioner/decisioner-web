import { ButtonProps as MUIButtonProps } from '@mui/material';

export type ButtonProps = Pick<MUIButtonProps, 'variant' | 'type'> & {
  color?: ButtonColor;
  children: React.ReactNode;
};

export enum ButtonColor {
  PRIMARY = 'primary',
  GRAY = 'gray',
  RED = 'red',
  GREEN = 'green',
}
