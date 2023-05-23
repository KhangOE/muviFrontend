import { createReviewType, movieType, reviewType } from "../Type";
import axiosClient from "./axiosClient";

export const deleteReviewApi = (id: Number) => {
  return axiosClient.delete("/api/review" + id);
};
export const getReviewByMovieApi = (id: number) => {
  return axiosClient.get("/api/review/movie/" + id);
};

export const createReviewApi = (data: createReviewType) => {
  const res = axiosClient.post(
    "/api/review",
    { text: data.text, rating: data.rating },
    {
      params: {
        userId: data.userId,
        movieId: data.movieId,
      },
    }
  );
  return res;
};

export const updateReviewApi = (id: Number) => {
  return axiosClient.put("/api/review" + id);
};
