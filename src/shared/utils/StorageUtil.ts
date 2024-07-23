class StorageUtil {
  static setToken(accessToken: string) {
    localStorage.setItem('ACCESS_TOKEN', accessToken);
  }

  static getAccessToken(): string | null {
    return localStorage.getItem('ACCESS_TOKEN') || null;
  }

  static removeToken() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}

export default StorageUtil;
