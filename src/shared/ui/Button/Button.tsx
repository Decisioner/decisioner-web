import React from 'react';
import { Button as MUIButton, SxProps, Theme } from '@mui/material';
import { ButtonColor, ButtonProps } from './Button.props';
import * as styles from './Button.styles';

const Button = ({
  variant = 'contained',
  color = ButtonColor.PRIMARY,
  children,
  sx = {},
  ...props
}: ButtonProps) => {
  return (
    <MUIButton
      variant={variant}
      sx={[sx, styles.button(color, variant)] as SxProps<Theme>}
      disableElevation
      {...props}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
