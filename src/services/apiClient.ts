import axios from "axios";

// Axios instance pre-configured for the future backend.
// NOTE: This is a service-layer scaffold only — no backend is implemented yet.
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  // Attach auth token here once authentication is implemented.
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Centralised error handling placeholder.
    return Promise.reject(error);
  }
);
