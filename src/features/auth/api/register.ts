import { apiClient } from '@/core/config';
import { RegisterRequest } from '../models';

export const register = async (body: RegisterRequest): Promise<void> => {
  const { data } = await apiClient.post<void>('/auth/register', body);
  return data;
};
