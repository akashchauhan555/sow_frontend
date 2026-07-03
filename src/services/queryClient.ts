import { QueryClient } from "@tanstack/react-query";

// React Query client configuration (config only — no live endpoints yet).
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
