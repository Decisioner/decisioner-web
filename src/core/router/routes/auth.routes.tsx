import React, { lazy } from 'react';
import { createRouteObjectWithEnumPaths } from '../utils';

const LoginPage = lazy(() =>
  import('@/features/auth/pages').then((module) => ({
    default: module.LoginPage,
  }))
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

export const authRoutes = createRouteObjectWithEnumPaths(AuthRoutes, {
  [AuthRoutes.LOGIN]: {
    element: <LoginPage />,
  },
  [AuthRoutes.REGISTER]: {
    element: <RegisterPage />,
  },
});
