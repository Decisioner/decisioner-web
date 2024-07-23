import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Routes } from './routes';

import { LoginPage } from '@/pages/login-page';
import { RegisterPage } from '@/pages/register-page';
import { HomePage } from '@/pages/home-page';
import { AuthenticatedGuard, UnauthenticatedGuard } from './guards';

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

export const router = createBrowserRouter([
  ...authorizedRoutes,
  ...unauthorizedRoutes,
]);
