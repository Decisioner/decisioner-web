import React from 'react';
import { Box } from '@mui/material';

import * as styles from './Sidebar.styles';
import { navLinks } from '../../constants';
import { SidebarItem } from '../SidebarItem';

const Sidebar = () => {
  return (
    <Box sx={styles.sidebar}>
      {navLinks.map((link) => (
        <SidebarItem key={link.to} {...link} />
      ))}
    </Box>
  );
};

export default Sidebar;
