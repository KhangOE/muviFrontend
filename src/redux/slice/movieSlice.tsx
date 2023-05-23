import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { wait } from "@testing-library/user-event/dist/utils";
import { getMovie } from "../../service/movieService";
import { create } from "domain";
import { movieType } from "../../Type";
import { error } from "console";

const initialState: { movie: movieType; loading: boolean; error: boolean } = {
  movie: {
    id: null,
    url: "",
    poster: "",
    background: "",
    title: "",
    description: "",
    score: 0,
    categories: [],
  },
  loading: false,
  error: false,
};

export const getMovieById = createAsyncThunk(
  "users/fetchById",
  // if you type your function argument here
  async (userId: number) => {
    console.log("callapi");
    console.log("12312487197");
    const response = await getMovie(userId); //fetch(`https://reqres.in/api/users/${userId}`);
    console.log(response.data);
    return response.data;
  }
);

export const getAllMovies = createAsyncThunk(
  "adfafdadsf",

  async () => {
    console.log("afdfadf");
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMovieById.fulfilled, (state, action) => {
      console.log("fulfill");
      state.movie.id = action.payload.id;
      state.movie.description = action.payload.description;
      state.movie.score = action.payload.score;
      state.movie.background = action.payload.background;
      state.movie.poster = action.payload.poster;
      state.movie.title = action.payload.title;
      state.movie.url = action.payload.url;
      state.movie.categories = action.payload.categories;
    });
    builder.addCase(getMovieById.rejected, (state, action) => {
      console.log("reject");
    });
    builder.addCase(getMovieById.pending, (state, action) => {
      console.log("peind");
    });
  },
});

export default movieSlice.reducer;
