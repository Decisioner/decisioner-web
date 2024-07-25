import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Search } from '@mui/icons-material';
import { Avatar, Box, TextField } from '@mui/material';

import { Routes } from '@/core/router';
import * as styles from './Header.styles';

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.header}>
      <TextField
        placeholder="Search"
        fullWidth
        sx={{
          borderRadius: 2,
          overflow: 'hidden',
          '.MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
        }}
        InputProps={{
          sx: {
            backgroundColor: 'white.main',
          },
          startAdornment: (
            <Box sx={{ mr: 1 }}>
              <Search />
            </Box>
          ),
        }}
      />
      <Avatar sx={styles.avatar} onClick={() => navigate(Routes.PROFILE)} />
    </Box>
  );
};

export default Header;
