import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';

import { Button, ButtonColor } from '@/shared/ui';
import { Sidebar } from '../Sidebar';

import { Routes } from '@/core/router';

import * as styles from './Header.styles';

const HeaderMobile = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <Box sx={styles.header(true)}>
        <Typography variant="h2Medium">
          <Link to={Routes.HOME}>Decisioner</Link>
        </Typography>
        <Button
          color={ButtonColor.GRAY}
          sx={{
            backgroundColor: 'white!important',
            paddingBlock: '12px!important',
          }}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <Close /> : <Menu />}
        </Button>
      </Box>
      {isNavOpen && <Sidebar />}
    </>
  );
};

export default HeaderMobile;
