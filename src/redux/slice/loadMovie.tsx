import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";
import { getMovie, getMoviesApi } from "../../service/movieService";
import { create } from "domain";
import { movieType } from "../../Type";
import { error } from "console";

const initialState: {
  movie: movieType[];
  loading: boolean;
  error: boolean;
  page: number;
  total: number;
} = {
  movie: [],
  page: 1,
  total: 10,
  loading: false,
  error: false,
};

export const getMovies = createAsyncThunk(
  "movies",
  // if you type your function argument here
  async (data: {
    category: number[];
    page: number;
    sort: number;
    query: string | null;
  }) => {
    console.log(data);
    const response = await getMoviesApi(data);
    // console.log(response, "respone"); //fetch(`https://reqres.in/api/users/${userId}`);
    console.log(response.data, "data");
    return response.data;
  }
);

const loadMovieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovies.fulfilled, (state, action) => {
      console.log(action.payload, "payload");
      state.total = action.payload.total;
      state.movie = [...action.payload.moviePaginate];
    });
    builder.addCase(getMovies.rejected, (state, action) => {
      //console.log("reject");
    });
    builder.addCase(getMovies.pending, (state, action) => {
      ///  console.log("peind");
    });
  },
});

export default loadMovieSlice.reducer;
