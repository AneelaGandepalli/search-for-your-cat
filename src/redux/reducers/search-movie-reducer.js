import { createSlice } from "@reduxjs/toolkit";

const searchMovieReducer = createSlice({
  name: "searchMovieReducer",
  initialState: { movies: [] },
  reducers: {
    searchMovieByNameSuccess: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

export const { searchMovieByNameSuccess } = searchMovieReducer.actions;

export default searchMovieReducer.reducer;
