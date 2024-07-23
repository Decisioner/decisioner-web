import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, DefaultValues, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Typography } from '@mui/material';
import { Button, TextField } from '@/shared/ui';

import {
  AuthService,
  RegisterRequest,
  RegisterRequestSchema,
} from '@/core/api/auth';
import { Routes } from '@/core/router';

import * as styles from './RegisterForm.styles';

const registerFormDefaultValues: DefaultValues<RegisterRequest> = {
  username: '',
  email: '',
  fullName: '',
  password: '',
};

const RegisterForm = () => {
  const navigate = useNavigate();

  const registerForm = useForm<RegisterRequest>({
    defaultValues: registerFormDefaultValues,
    resolver: zodResolver(RegisterRequestSchema),
  });

  const handleSubmit = registerForm.handleSubmit(async (data) => {
    await AuthService.register(data);
    navigate(Routes.LOGIN);
  });

  return (
    <Box component="form" noValidate sx={styles.form} onSubmit={handleSubmit}>
      <Controller
        name="username"
        control={registerForm.control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Username"
            helperText={registerForm.formState.errors.username?.message}
            error={Boolean(registerForm.formState.errors.username)}
          />
        )}
      />
      <Controller
        name="email"
        control={registerForm.control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            helperText={registerForm.formState.errors.email?.message}
            error={Boolean(registerForm.formState.errors.email)}
          />
        )}
      />
      <Controller
        name="fullName"
        control={registerForm.control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Fulle name"
            helperText={registerForm.formState.errors.fullName?.message}
            error={Boolean(registerForm.formState.errors.fullName)}
          />
        )}
      />
      <Controller
        name="password"
        control={registerForm.control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Password"
            type="password"
            helperText={registerForm.formState.errors.password?.message}
            error={Boolean(registerForm.formState.errors.password)}
          />
        )}
      />
      <Button type="submit">Register</Button>
      <Typography variant="body1" color="gray.main">
        Already have an account? <Link to={Routes.LOGIN}>Log in</Link>
      </Typography>
    </Box>
  );
};

export default RegisterForm;
