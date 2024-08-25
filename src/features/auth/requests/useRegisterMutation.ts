import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { register } from '../api';
import { RegisterRequest } from '../models';

import { Routes } from '@/core/router';

export const useRegisterMutation = () => {
  const navigate = useNavigate();

  return useMutation<void, unknown, RegisterRequest, unknown>({
    mutationFn: register,
    onSuccess: async () => {
      navigate(Routes.HOME);
    },
  });
};
