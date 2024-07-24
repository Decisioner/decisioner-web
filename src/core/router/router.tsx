import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { AuthenticatedGuard, UnauthenticatedGuard } from './guards';
import LazyLoadingWrap from '@/shared/ui/LazyLoadingWrapper';
import { authRoutes, mainRoutes, pollsRoutes } from './routes';

const authorizedRoutes: RouteObject[] = [
  {
    element: <AuthenticatedGuard />,
    children: [...mainRoutes, ...pollsRoutes].map((route) => ({
      ...route,
      element: <LazyLoadingWrap>{route.element}</LazyLoadingWrap>,
    })),
  },
];

const unauthorizedRoutes: RouteObject[] = [
  {
    element: <UnauthenticatedGuard />,
    children: authRoutes.map((route) => ({
      ...route,
      element: <LazyLoadingWrap>{route.element}</LazyLoadingWrap>,
    })),
  },
];

export const router = createBrowserRouter([
  ...authorizedRoutes,
  ...unauthorizedRoutes,
]);
