import axios, { Axios } from "axios";

const axiosClient = axios.create({
  baseURL: "https://localhost:7094/",
});

export default axiosClient;
