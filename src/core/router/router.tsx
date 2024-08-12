import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import LazyLoadingWrap from '@/shared/ui/LazyLoadingWrapper';
import { AuthenticatedGuard, UnauthenticatedGuard } from './guards';
import { transformToArray } from './utils';
import { Routes, authRoutes, mainRoutes, pollsRoutes } from './routes';
import { RouteObjectWithEnumPaths } from './types';

const authorizedRoutes: RouteObject[] = [
  {
    element: <AuthenticatedGuard />,
    children: [mainRoutes, pollsRoutes]
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .flatMap((routeObject: RouteObjectWithEnumPaths<any>) =>
        transformToArray<keyof typeof Routes>(routeObject)
      )
      .map((route) => ({
        ...route,
        element: <LazyLoadingWrap>{route.element}</LazyLoadingWrap>,
      })),
  },
];

const unauthorizedRoutes: RouteObject[] = [
  {
    element: <UnauthenticatedGuard />,
    children: transformToArray(authRoutes).map((route) => ({
      ...route,
      element: <LazyLoadingWrap>{route.element}</LazyLoadingWrap>,
    })),
  },
];

export const router = createBrowserRouter([
  ...authorizedRoutes,
  ...unauthorizedRoutes,
]);
