import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';

import type { SidebarItemProps } from './SidebarItem.types';

const SidebarItem = ({ icon, label, to }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = useMemo(
    () => location.pathname === to,
    [location.pathname, to]
  );

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <Link to={to}>
        <ListItemButton sx={{ gap: 1, borderRadius: 2 }}>
          <ListItemIcon
            sx={{ color: isActive ? 'primary.main' : 'black', minWidth: 0 }}
          >
            {icon[isActive ? 'active' : 'inactive']}
          </ListItemIcon>
          <ListItemText
            sx={{
              color: isActive ? 'primary.main' : 'black',
            }}
            primary={
              <Typography
                noWrap
                variant="body2"
                sx={{ textDecoration: 'none' }}
              >
                {label}
              </Typography>
            }
          />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

export default SidebarItem;
