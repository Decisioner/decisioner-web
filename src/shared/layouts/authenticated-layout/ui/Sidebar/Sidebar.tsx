import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { Button, ButtonColor } from '@/shared/ui';
import { SidebarItem } from '../SidebarItem';

import { Routes } from '@/core/router';
import { navLinks } from '../../constants';

import * as styles from './Sidebar.styles';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleCreatePoll = () => {
    navigate(Routes.CREATE_POLL);
  };

  return (
    <Box sx={styles.sidebar}>
      <Link to={Routes.HOME}>
        <Typography variant="h2Medium">Decisioner</Typography>
      </Link>
      <Box sx={styles.nav}>
        {navLinks.map((link) => (
          <SidebarItem key={link.to} {...link} />
        ))}
      </Box>
      <Button
        color={ButtonColor.GREEN}
        onClick={handleCreatePoll}
        sx={{ mt: 'auto' }}
      >
        Create poll
      </Button>
    </Box>
  );
};

export default Sidebar;
