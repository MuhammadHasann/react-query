"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ReactQueryClientProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

const ReactQueryClient = (props: ReactQueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
    </QueryClientProvider>
  );
};

export default ReactQueryClient;
