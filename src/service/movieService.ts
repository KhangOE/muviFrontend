import { AxiosRequestConfig } from "axios";
import axiosClient from "./axiosClient";
import { movieType } from "../Type";

export const getMovie = async (id: Number) => {
  return axiosClient.get("/api/movie/" + id);
};

export const getMoviesApi = async (data: {
  category: number[];
  page: number;
  sort: number;
  query: string | null;
}) => {
  return axiosClient.get(
    "/api/movie?page=" +
      data.page +
      data.category
        .map((c) => {
          return "&category=" + c;
        })
        .join(""),
    {
      params: {
        // category: [1, 2, 3],
        //page: data.page,
        sort: data.sort,
        query: data.query,
      },
    }
  );
};
