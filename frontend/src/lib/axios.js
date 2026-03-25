import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
const BASE_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:5001/api" : "/api");


const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
