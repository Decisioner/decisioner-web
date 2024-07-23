import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/hooks/use-auth';
import { Routes } from '../routes';

const AuthenticatedGuard = () => {
  const { isLoggedIn } = useAuth();

  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={Routes.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthenticatedGuard;
