import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { Routes } from './routes';

const HomePage = lazy(() =>
  import('@/pages/home-page').then((module) => ({ default: module.HomePage }))
);

const SavedPage = lazy(() =>
  import('@/pages/saved-page').then((module) => ({
    default: module.SavedPage,
  }))
);

export const mainRoutes: RouteObject[] = [
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
  {
    path: Routes.MY_POLLS,
    element: <div>My polls</div>,
  },
  {
    path: Routes.SAVED,
    element: <SavedPage />,
  },
  {
    path: Routes.PROFILE,
    element: <div>Profile</div>,
  },
];
