import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "@context/AppContext";
import { queryClient } from "@services/queryClient";
import { useLenis } from "@hooks/useLenis";
import AppRoutes from "@/routes";

// Root application component — wires up global providers (routing, query client,
// SEO helmet, smooth scroll, and shared app state).
export default function App() {
  useLenis();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <AppProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AppProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}
