import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { Routes } from './routes';

const CreatePollPage = lazy(() =>
  import('@/pages/create-poll').then((module) => ({
    default: module.CreatePollPage,
  }))
);

export const pollsRoutes: RouteObject[] = [
  {
    path: Routes.CREATE_POLL,
    element: <CreatePollPage />,
  },
];
