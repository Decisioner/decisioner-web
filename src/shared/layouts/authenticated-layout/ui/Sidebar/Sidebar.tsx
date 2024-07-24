import React from 'react';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
      {navLinks.map((link) => (
        <SidebarItem key={link.to} {...link} />
      ))}
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
