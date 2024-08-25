import React, { lazy } from 'react';
import { createRouteObjectWithEnumPaths } from '../utils';

const HomePage = lazy(() =>
  import('@/features/poll/pages').then((module) => ({
    default: module.HomePage,
  }))
);

const SavedPage = lazy(() =>
  import('@/features/poll/pages').then((module) => ({
    default: module.SavedPage,
  }))
);

export enum MainRoutes {
  HOME = '/',
  MY_POLLS = '/polls/my',
  SAVED = '/saved',
  PROFILE = '/profile',
}

export const mainRoutes = createRouteObjectWithEnumPaths(MainRoutes, {
  [MainRoutes.HOME]: {
    element: <HomePage />,
  },
  [MainRoutes.MY_POLLS]: {
    element: <div>My polls</div>,
  },
  [MainRoutes.SAVED]: {
    element: <SavedPage />,
  },
  [MainRoutes.PROFILE]: {
    element: <div>Profile</div>,
  },
});
