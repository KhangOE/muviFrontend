import axiosClient from "./axiosClient";

export const getCategoryApi = () => {
  const res = axiosClient.get("/api/Category");
  return res;
};
