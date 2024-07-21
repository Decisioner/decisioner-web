import React from 'react';
import { Button as MUIButton } from '@mui/material';
import { ButtonColor, ButtonProps } from './Button.props';
import * as styles from './Button.styles';

const Button = ({
  variant = 'contained',
  color = ButtonColor.PRIMARY,
  children,
}: ButtonProps) => {
  return (
    <MUIButton
      variant={variant}
      sx={styles.button(color, variant)}
      disableElevation
    >
      {children}
    </MUIButton>
  );
};

export default Button;
