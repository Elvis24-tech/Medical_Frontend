import axios from "axios";
import { getToken } from "../utils/token";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ Attach token ONLY for protected routes
api.interceptors.request.use((config) => {
  const token = getToken();

  const isAuthRoute =
    config.url?.includes("auth/login") ||
    config.url?.includes("auth/register");

  if (token && !isAuthRoute) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;