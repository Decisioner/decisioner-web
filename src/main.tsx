import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import theme from '@/core/theme';
import { router } from '@/core/router';
import { AuthContext } from '@/core/hooks/use-auth/use-auth-context';

import '@/core/theme/styles';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <AuthContext>
          <RouterProvider router={router} />
        </AuthContext>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);
