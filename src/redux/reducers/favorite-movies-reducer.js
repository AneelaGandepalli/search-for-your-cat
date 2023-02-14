import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import isEmpty from "lodash/isEmpty";

const cookies = new Cookies();
const favoriteMoviesFromCookies = cookies.get("favorite_movies");

const favoriteMoviesReducer = createSlice({
  name: "favoriteMoviesReducer",
  initialState: {
    favoriteMovies: isEmpty(favoriteMoviesFromCookies)
      ? []
      : favoriteMoviesFromCookies,
  },
  reducers: {
    updateFavoriteMoviesSuccess: (state, { payload }) => {
      state.favoriteMovies = payload;
    },
  },
});

export const { updateFavoriteMoviesSuccess } = favoriteMoviesReducer.actions;

export default favoriteMoviesReducer.reducer;
