import { apiClient } from '@/core/config/api';
import { Token } from '@/core/models';
import { LoginRequest } from '../models';

export const login = async (body: LoginRequest): Promise<Token> => {
  const { data } = await apiClient.post<Token>('/auth/login', body);
  return data;
};
