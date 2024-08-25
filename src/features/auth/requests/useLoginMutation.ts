import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { login } from '../api';
import { LoginRequest } from '../models';

import { Token } from '@/core/models';
import { StorageUtil } from '@/shared/utils';
import { Routes } from '@/core/router';

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation<Token, unknown, LoginRequest, unknown>({
    mutationFn: login,
    onSuccess: async (response) => {
      queryClient.invalidateQueries({ queryKey: ['oauth'] });
      StorageUtil.setToken(response.accessToken);
      navigate(Routes.HOME);
    },
  });
};
