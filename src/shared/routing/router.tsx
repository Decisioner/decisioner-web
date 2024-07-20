import React from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { Routes } from './routes';

import { HomePage, LoginPage, RegisterPage } from '@/pages';

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
