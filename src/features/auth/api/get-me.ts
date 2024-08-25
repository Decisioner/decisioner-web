import { apiClient } from '@/core/config/api';

export const getMe = async () => {
  const { data } = await apiClient.get('/auth/me');
  return data;
};
