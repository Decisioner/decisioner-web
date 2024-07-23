import { Token, User } from '@/core/models';
import { LoginRequest, RegisterRequest } from './models';
import { $apiClient } from '@/core/config';
import { StorageUtil } from '@/shared/utils';

class AuthService {
  static async register(body: RegisterRequest): Promise<void> {
    const { data } = await $apiClient.post<void>('/auth/register', body);
    return data;
  }

  static async login(body: LoginRequest): Promise<void> {
    const {
      data: { accessToken },
    } = await $apiClient.post<Token>('/auth/login', body);
    StorageUtil.setToken(accessToken);
  }

  static async getMe(): Promise<User> {
    const { data } = await $apiClient.get<User>('/auth/me');
    return data;
  }

  static async logout(): Promise<void> {
    StorageUtil.removeToken();
  }
}

export { AuthService };
