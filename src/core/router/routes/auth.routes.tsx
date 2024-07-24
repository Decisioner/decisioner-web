import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import { Routes } from './routes';

const LoginPage = lazy(() =>
  import('@/pages/login-page').then((module) => ({ default: module.LoginPage }))
);
const RegisterPage = lazy(() =>
  import('@/pages/register-page').then((module) => ({
    default: module.RegisterPage,
  }))
);

export const authRoutes: RouteObject[] = [
  {
    path: Routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: Routes.REGISTER,
    element: <RegisterPage />,
  },
];
