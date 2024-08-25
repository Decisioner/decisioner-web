import React from 'react';
import { Link } from 'react-router-dom';
import { Controller, DefaultValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Typography } from '@mui/material';
import { Button, TextField } from '@/shared/ui';

import { LoginRequest, LoginRequestSchema } from '@/features/auth/models';
import { useLoginMutation } from '@/features/auth/requests';

import { Routes } from '@/core/router';

import * as styles from './LoginForm.styles';

const loginFormDefaultValues: DefaultValues<LoginRequest> = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const loginMutation = useLoginMutation();

  const loginForm = useForm<LoginRequest>({
    defaultValues: loginFormDefaultValues,
    resolver: zodResolver(LoginRequestSchema),
  });

  const handleSubmit = loginForm.handleSubmit(async (data) => {
    loginForm.clearErrors('root');
    loginMutation.mutate(data);
  });

  return (
    <Box component="form" noValidate sx={styles.form} onSubmit={handleSubmit}>
      <Controller
        name="username"
        control={loginForm.control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            helperText={loginForm.formState.errors.username?.message}
            error={Boolean(loginForm.formState.errors.username)}
          />
        )}
      />
      <Controller
        name="password"
        control={loginForm.control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            helperText={loginForm.formState.errors.password?.message}
            error={Boolean(loginForm.formState.errors.password)}
          />
        )}
      />
      <Button type="submit">Login</Button>
      <Typography variant="body1" color="gray.main">
        Doesn&apos;t have an account?{' '}
        <Link to={Routes.REGISTER} style={{ textDecoration: 'underline' }}>
          Register
        </Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
