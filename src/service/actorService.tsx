import axiosClient from "./axiosClient";

export const getActorApi = () => {
  const res = axiosClient.get("/api/actor");
  return res;
};
