import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface AppQueryClientProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export const AppQueryClient = ({ children }: AppQueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        {children}
        <ReactQueryDevtools initialIsOpen />
      </>
    </QueryClientProvider>
  );
};

export default AppQueryClient;
