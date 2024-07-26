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

const SidebarItem = ({
  icon,
  label,
  to,
  isMobile = false,
}: SidebarItemProps) => {
  const location = useLocation();
  const isActive = useMemo(
    () => location.pathname === to,
    [location.pathname, to]
  );

  return (
    <ListItem
      disablePadding
      sx={{
        display: 'block',
        borderRadius: 2,
        overflow: 'hidden',
        ...(isMobile && {
          backgroundColor: isActive ? 'gray.light' : 'inherit',
        }),
      }}
    >
      <Link to={to}>
        <ListItemButton
          sx={{
            gap: isMobile ? 3 : 1,
            ...(isMobile && {
              paddingBlock: 2,
            }),
          }}
        >
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
