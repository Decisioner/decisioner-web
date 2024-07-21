import React, { useState } from 'react';

import {
  IconButton,
  InputAdornment,
  TextField as MUITextField,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { TextFieldProps } from './TextField.props';
import * as styles from './TextField.styles';

const TextField = ({ type, ...props }: TextFieldProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <MUITextField
      {...props}
      fullWidth
      sx={styles.formField}
      type={type === 'password' && isVisible ? 'text' : type}
      InputProps={{
        ...props.InputProps,
        sx: styles.input,
        endAdornment:
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ) : (
            props.InputProps?.endAdornment
          ),
      }}
    />
  );
};

export default TextField;
