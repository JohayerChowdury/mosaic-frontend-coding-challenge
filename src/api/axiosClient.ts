// src/api/axiosClient.js
import axios from "axios"

// TODO: replace API_BASE_URL with your own API URL
export const API_BASE_URL = "https://jsonplaceholder.typicode.com"

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

// // Request interceptor for auth tokens (optional)
// axiosClient.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

// Response error handler
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error)
    return Promise.reject(error)
  },
)

export default axiosClient
