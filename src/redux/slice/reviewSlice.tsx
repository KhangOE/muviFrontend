import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovie } from "../../service/movieService";
import { createReviewType, reviewType } from "../../Type";
import {
  createReviewApi,
  getReviewByMovieApi,
} from "../../service/reviewServices";
import { error } from "console";

const initialState: { review: reviewType[]; loading: boolean; error: boolean } =
  {
    review: [],
    loading: false,
    error: false,
  };

export const getReviewMovie = createAsyncThunk(
  "get/movie/review",
  // if you type your function argument here
  async (id: number) => {
    const response = await getReviewByMovieApi(id); //fetch(`https://reqres.in/api/users/${userId}`);
    return response.data;
  }
);

export const createReview = createAsyncThunk(
  "create/review",
  async (data: createReviewType) => {
    const res = await createReviewApi(data);
    return res.data;
  }
);
const reviewSlice = createSlice({
  name: "review",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReviewMovie.fulfilled, (state, action) => {
      // console.log(action.payload);
      state.review = [...action.payload.reverse()];
    });
    builder.addCase(getReviewMovie.rejected, (state, action) => {
      console.log("reject");
    });
    builder.addCase(getReviewMovie.pending, (state, action) => {
      console.log("peind");
    });

    builder.addCase(createReview.fulfilled, (state, action) => {
      console.log(action.payload, "payload");
      state.review = [action.payload, ...state.review];
    });
    builder.addCase(createReview.rejected, (state, action) => {
      console.log("reject");
    });
    builder.addCase(createReview.pending, (state, action) => {
      console.log("peind");
    });
  },
});

export default reviewSlice.reducer;
