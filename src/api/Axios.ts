import axios from "axios";

export const api = axios.create({
  baseURL: "orionapi-production.up.railway.app",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});