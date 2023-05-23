import { registerType } from "../Type";
import axiosClient from "./axiosClient";

export const getUser = () => {
  return axiosClient.get("/api/user");
};

export const registerUserApi = (data: registerType) => {
  return axiosClient.post("/api/user", data);
};

export const LoginApi = (data: { userName: string; password: string }) => {
  console.log(data);
  return axiosClient.post("/api/Auth/login", data);
};
