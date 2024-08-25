import React from 'react';
import { UnauthenticatedLayout } from '@/shared/layouts';
import { LoginForm } from './LoginForm';

const LoginPage = () => {
  return (
    <UnauthenticatedLayout
      title="Welcome back, we’ve been waiting on you!"
      slogan="Welcome! Login to get access to all functionality"
    >
      <LoginForm />
    </UnauthenticatedLayout>
  );
};

export default LoginPage;
