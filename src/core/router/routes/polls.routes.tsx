import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreatePollPage = lazy(() =>
  import('@/pages/create-poll').then((module) => ({
    default: module.CreatePollPage,
  }))
);

export enum PollsRoutes {
  POLL = '/polls/:id',
  CREATE_POLL = '/polls/create',
  UPDATE_POLL = '/polls/:id/update',
}

export const pollsRoutes: RouteObject[] = [
  {
    path: PollsRoutes.POLL,
    element: <h1>Poll</h1>,
  },
  {
    path: PollsRoutes.CREATE_POLL,
    element: <CreatePollPage />,
  },
  {
    path: PollsRoutes.UPDATE_POLL,
    element: <h1>UpdatePoll</h1>,
  },
];
