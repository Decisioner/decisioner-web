import React, { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LoginPage = lazy(() =>
  import('@/pages/login-page').then((module) => ({ default: module.LoginPage }))
);
const RegisterPage = lazy(() =>
  import('@/pages/register-page').then((module) => ({
    default: module.RegisterPage,
  }))
);

export enum AuthRoutes {
  LOGIN = '/auth/login',
  REGISTER = '/auth/register',
}

export const authRoutes: RouteObject[] = [
  {
    path: AuthRoutes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: AuthRoutes.REGISTER,
    element: <RegisterPage />,
  },
];
