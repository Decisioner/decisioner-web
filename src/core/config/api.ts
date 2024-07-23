import axios, { InternalAxiosRequestConfig } from 'axios';
import { StorageUtil } from '@/shared/utils';

const API_URL_HTTP = `${import.meta.env.VITE_API_URL}/api/v1`;

const $apiClient = axios.create({ baseURL: API_URL_HTTP });

$apiClient.interceptors.request.use((req: InternalAxiosRequestConfig) => {
  req.headers.Authorization = `Bearer ${StorageUtil.getAccessToken()}`;
  return req;
});

export { $apiClient };
