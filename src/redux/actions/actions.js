import axios from "axios";
import Cookies from "universal-cookie";

import { searchMovieByNameSuccess } from "../reducers/search-movie-reducer";
import { updateFavoriteMoviesSuccess } from "../reducers/favorite-movies-reducer";

const cookies = new Cookies();

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;

export const searchMovieByName = (dispatch, query) => {
  axios
    .get(`${baseUrl}/search/movie`, {
      params: { api_key: apiKey, query },
    })
    .then((response) => {
      dispatch(searchMovieByNameSuccess(response.data));
    });
};

export const updateFavoriteMovies = (dispatch, updatedMovies) => {
  dispatch(updateFavoriteMoviesSuccess(updatedMovies));

  cookies.set("favorite_movies", updatedMovies);
};
