import axios from "axios";

export const api = axios.create({
  baseURL: "https://orionapi-production.up.railway.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});