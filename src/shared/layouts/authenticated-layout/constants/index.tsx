import React from 'react';
import {
  Bookmark,
  BookmarkBorder,
  Home,
  HomeOutlined,
  Person,
  PersonOutlined,
  Poll,
  PollOutlined,
} from '@mui/icons-material';

import { Routes } from '@/core/router';
import { SidebarItemProps } from '../ui/SidebarItem';

export const navLinks: SidebarItemProps[] = [
  {
    icon: { active: <Home />, inactive: <HomeOutlined /> },
    label: 'All pols',
    to: Routes.HOME,
  },
  {
    icon: { active: <Poll />, inactive: <PollOutlined /> },
    label: 'My polls',
    to: Routes.MY_POLLS,
  },
  {
    icon: { active: <Bookmark />, inactive: <BookmarkBorder /> },
    label: 'Saved',
    to: Routes.SAVED,
  },
  {
    icon: { active: <Person />, inactive: <PersonOutlined /> },
    label: 'Profile',
    to: Routes.PROFILE,
  },
];
