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
    ].map((route) => ({
      ...route,
      element: <LazyLoadingWrap>{route.element}</LazyLoadingWrap>,
    })),
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
    ].map((route) => ({
      ...route,
      element: <LazyLoadingWrap>{route.element}</LazyLoadingWrap>,
    })),
  },
];

export const router = createBrowserRouter([
  ...authorizedRoutes,
  ...unauthorizedRoutes,
]);
