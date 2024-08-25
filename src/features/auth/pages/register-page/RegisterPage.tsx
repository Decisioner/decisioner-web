import React from 'react';
import { UnauthenticatedLayout } from '@/shared/layouts';
import { RegisterForm } from './RegisterForm';

const RegisterPage = () => {
  return (
    <UnauthenticatedLayout
      slogan="Welcome! Register to get access to all functionality"
      title="We need just a little information about you"
      subtitle="All this information is used to identify you in the system"
    >
      <RegisterForm />
    </UnauthenticatedLayout>
  );
};

export default RegisterPage;
