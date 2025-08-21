import api from "../api";

export const csrf = () => api.get("/sanctum/csrf-cookie");

export const login = async (email: string, password: string) => {
  await csrf();
  return api.post("/login", { email, password });
};

export const logout = () => api.post("/logout");

export const register = async (data: {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}) => {
  await csrf();
  return api.post("/register", data);
};

export const user = () => api.get("/user");


