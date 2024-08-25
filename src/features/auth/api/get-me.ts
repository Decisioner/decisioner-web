import { apiClient } from '@/core/config';

export const getMe = async () => {
  const { data } = await apiClient.get('/auth/me');
  return data;
};
