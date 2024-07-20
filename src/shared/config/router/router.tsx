import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Routes } from './routes';

import { LoginPage } from '@/pages/auth/login-page';
import { RegisterPage } from '@/pages/auth/register-page';
import { HomePage } from '@/pages/home-page';

const authorizedRoutes: RouteObject[] = [
  {
    path: Routes.HOME,
    element: <HomePage />,
  },
];

const unauthorizedRoutes: RouteObject[] = [
  {
    path: Routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: Routes.REGISTER,
    element: <RegisterPage />,
  },
];

export const router = createBrowserRouter([
  ...authorizedRoutes,
  ...unauthorizedRoutes,
]);
