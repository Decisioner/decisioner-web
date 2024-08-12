import React from 'react';
import { Box, Theme, Typography, useMediaQuery } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import { Button, ButtonColor } from '@/shared/ui';
import { SidebarItem } from '../SidebarItem';

import { Routes } from '@/core/router';
import { navLinks } from '../../constants';

import { AuthService } from '@/core/api/auth';
import { useAuth } from '@/core/hooks/use-auth';

import * as styles from './Sidebar.styles';

const Sidebar = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down('md')
  );
  const { update } = useAuth();

  const handleCreatePoll = () => {
    navigate(Routes.CREATE_POLL);
  };

  const handleLogout = async () => {
    await AuthService.logout();
    await update();
    navigate(0);
  };

  return (
    <Box sx={styles.sidebar(isMobile)}>
      {!isMobile && (
        <Link to={Routes.HOME}>
          <Typography variant="h2Medium">Decisioner</Typography>
        </Link>
      )}
      <Box sx={{ ...styles.nav, ...(isMobile && { gap: 2 }) }}>
        {navLinks.map((link) => (
          <SidebarItem key={link.to} {...link} isMobile={isMobile} />
        ))}
      </Box>
      <Button
        color={ButtonColor.GREEN}
        onClick={handleCreatePoll}
        sx={{ mt: 'auto' }}
      >
        Create poll
      </Button>
      {isMobile && (
        <Button color={ButtonColor.RED} onClick={handleLogout}>
          Log out
        </Button>
      )}
    </Box>
  );
};

export default Sidebar;
