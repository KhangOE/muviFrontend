import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "./slice/movieSlice";
import reviewSlice from "./slice/reviewSlice";
import authSlice from "./slice/authSlice";
import loadmovie from "./slice/loadMovie";

export const store = configureStore({
  reducer: {
    movie: movieSlice,
    reviews: reviewSlice,
    auth: authSlice,
    loadMovie: loadmovie,
  },
});

export type RootState = ReturnType<typeof store.getState>; // A global type to access reducers types
export type AppDispatch = typeof store.dispatch; // Type to access dispatch
export default store;
