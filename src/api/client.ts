import axios from "axios";
import { BASE_URL } from "./endpoints";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// interceptors (auth, logging, etc.)
apiClient.interceptors.request.use((config) => {
  // attach token
  return config;
});