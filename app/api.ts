import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

const api = axios.create({

    baseURL: API_URL,
    headers: {
        'content-type': 'application/json',
    }
});

api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const match = document.cookie.match(/XSRF-TOKEN=([^;]+)/);
    if (match) {
      // Laravel attend le token décodé
      const token = decodeURIComponent(match[1]);
      config.headers['X-XSRF-TOKEN'] = token;
    }
  }
  return config;
});

export default api;