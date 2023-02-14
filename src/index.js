import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import App from "./App";
import searchMovieReducer from "./redux/reducers/search-movie-reducer";
import favoriteMoviesReducer from "./redux/reducers/favorite-movies-reducer";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider
    store={configureStore({
      reducer: {
        searchedMovies: searchMovieReducer,
        favoriteMovies: favoriteMoviesReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false,
        }),
    })}
  >
    <App />
  </Provider>
);
