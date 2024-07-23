import React, { PropsWithChildren, useContext, useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { User } from '@/core/models';
import { StorageUtil } from '@/shared/utils';
import { AuthContextProps } from '../types';
import { AuthService } from '@/pages/auth/api';

const AuthContext = React.createContext<AuthContextProps>({
  update: () => new Promise(() => {}),
  user: {} as User,
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): AuthContextProps => useContext(AuthContext);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState(StorageUtil.getAccessToken());

  const { error, isFetching, isFetched, isError, data, refetch } = useQuery({
    queryKey: ['oauth', token],
    queryFn: () => AuthService.getMe(),
    refetchOnWindowFocus: false,
    retry: false,
  });

  if (error && !isFetching) {
    StorageUtil.removeToken();
  }

  const context: AuthContextProps = useMemo(
    () => ({
      user: data as User,
      update: async () => {
        setToken(StorageUtil.getAccessToken());
        await refetch();
      },
    }),
    [data, refetch]
  );

  return (
    <AuthContext.Provider value={context}>
      {(isFetched || isError) && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
