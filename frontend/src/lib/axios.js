import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" 
    ? "http://localhost:5001/api"  // ⚠️ Change to 5001 to match your backend
    : "/api",
  withCredentials: true, // ✅ Critical: sends cookies with requests
});