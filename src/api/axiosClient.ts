// src/api/axiosClient.js
import axios from "axios"

// TODO: replace API_BASE_URL with your own API URL
export const API_KEY = "I9LkZQCTrHTiLTUNzdiJFgNQaz0ZRfCF"
export const API_BASE_URL = "https://api.apilayer.com/exchangerates_data"
const API_CONVERT_TO_FROM_URL =
  "https://api.apilayer.com/exchangerates_data/convert?to={to}&from={from}&amount={amount}"

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    apiKey: API_KEY,
  },
})

// Response error handler
axiosClient.interceptors.response.use(
  response => response,
  error => {
    console.error("API Error:", error)
    return Promise.reject(error)
  },
)

export default axiosClient
