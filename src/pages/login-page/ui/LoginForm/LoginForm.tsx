import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, DefaultValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Typography } from '@mui/material';
import { Button, TextField } from '@/shared/ui';

import { LoginRequest, LoginRequestSchema, AuthService } from '@/core/api/auth';
import { Routes } from '@/core/router';

import * as styles from './LoginForm.styles';
import { useAuth } from '@/core/hooks/use-auth';

const loginFormDefaultValues: DefaultValues<LoginRequest> = {
  username: '',
  password: '',
};

const LoginForm = () => {
  const { update } = useAuth();
  const navigate = useNavigate();

  const loginForm = useForm<LoginRequest>({
    defaultValues: loginFormDefaultValues,
    resolver: zodResolver(LoginRequestSchema),
  });

  const handleSubmit = loginForm.handleSubmit(async (data) => {
    await AuthService.login(data);
    await update();
    navigate(Routes.HOME);
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
        Doesn&apos;t have an account? <Link to={Routes.REGISTER}>Register</Link>
      </Typography>
    </Box>
  );
};

export default LoginForm;
