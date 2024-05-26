'use client';
import {
    QueryClient,
    QueryClientProvider,
  } from '@tanstack/react-query'

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 5000,
      },
    },
  })
  const ReactQueryRegistry = ({ children }: React.PropsWithChildren) => {
    return <QueryClientProvider   client={queryClient}>{children}</QueryClientProvider>;
  };

  export default ReactQueryRegistry;