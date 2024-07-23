import React, { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

import { Routes } from './routes';
import { AuthenticatedGuard, UnauthenticatedGuard } from './guards';
import LazyLoadingWrap from '@/shared/ui/LazyLoadingWrapper';

const HomePage = lazy(() =>
  import('@/pages/home-page').then((module) => ({ default: module.HomePage }))
);

const LoginPage = lazy(() =>
  import('@/pages/login-page').then((module) => ({ default: module.LoginPage }))
);
const RegisterPage = lazy(() =>
  import('@/pages/register-page').then((module) => ({
    default: module.RegisterPage,
  }))
);

const authorizedRoutes: RouteObject[] = [
  {
    element: <AuthenticatedGuard />,
    children: [
      {
        path: Routes.HOME,
        element: <HomePage />,
      },
    ],
  },
];

const unauthorizedRoutes: RouteObject[] = [
  {
    element: <UnauthenticatedGuard />,
    children: [
      {
        path: Routes.LOGIN,
        element: <LoginPage />,
      },
      {
        path: Routes.REGISTER,
        element: <RegisterPage />,
      },
    ],
  },
];

export const router = createBrowserRouter(
  ([] as RouteObject[]).concat(
    ...[...authorizedRoutes, ...unauthorizedRoutes].map(
      (route) =>
        route.children?.map((childrenRoute) => ({
          ...childrenRoute,
          element: <LazyLoadingWrap>{childrenRoute.element}</LazyLoadingWrap>,
        })) || []
    )
  )
);
