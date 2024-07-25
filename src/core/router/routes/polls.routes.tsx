import React, { lazy } from 'react';
import { createRouteObjectWithEnumPaths } from '../utils';

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

export const pollsRoutes = createRouteObjectWithEnumPaths(PollsRoutes, {
  [PollsRoutes.POLL]: {
    element: <h1>Poll</h1>,
  },
  [PollsRoutes.CREATE_POLL]: {
    element: <CreatePollPage />,
  },
  [PollsRoutes.UPDATE_POLL]: {
    element: <h1>UpdatePoll</h1>,
  },
});
