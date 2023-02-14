import React from "react";
import { useSelector } from "react-redux";
import isEmpty from "lodash/isEmpty";
import Grid from "@mui/material/Grid";

import MovieCard from "./movie-card";

const renderMovieList = (movies) => {
  return movies.map((movie) => {
    return <MovieCard movie={movie} key={movie.id} />;
  });
};

const MoviesList = () => {
  const moviesData = useSelector((state) => state.searchedMovies);

  if (isEmpty(moviesData.movies.results)) {
    return null;
  }

  return (
    <Grid container justifyContent="center" spacing={2}>
      {renderMovieList(moviesData.movies.results)}
    </Grid>
  );
};

export default MoviesList;
