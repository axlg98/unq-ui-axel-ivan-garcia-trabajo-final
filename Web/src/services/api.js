import axios from "axios";

const api = axios.create({
  baseURL: "https://preguntados-api.vercel.app",
});

export default api;