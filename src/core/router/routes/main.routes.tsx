import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HomePage = lazy(() =>
  import('@/pages/home-page').then((module) => ({ default: module.HomePage }))
);

const SavedPage = lazy(() =>
  import('@/pages/saved-page').then((module) => ({
    default: module.SavedPage,
  }))
);

export enum MainRoutes {
  HOME = '/',
  MY_POLLS = '/polls/my',
  SAVED = '/saved',
  PROFILE = '/profile',
}

export const mainRoutes: RouteObject[] = [
  {
    path: MainRoutes.HOME,
    element: <HomePage />,
  },
  {
    path: MainRoutes.MY_POLLS,
    element: <div>My polls</div>,
  },
  {
    path: MainRoutes.SAVED,
    element: <SavedPage />,
  },
  {
    path: MainRoutes.PROFILE,
    element: <div>Profile</div>,
  },
];
