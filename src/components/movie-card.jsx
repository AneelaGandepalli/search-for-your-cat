import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import { updateFavoriteMovies } from "../redux/actions/actions";

const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ movie }) => {
  const favoriteMovies = useSelector(
    ({ favoriteMovies }) => favoriteMovies.favoriteMovies
  );

  const dispatch = useDispatch();
  const isMovieFavorited = favoriteMovies.includes(movie.id);

  const onFavoriteClick = () => {
    if (isMovieFavorited) {
      updateFavoriteMovies(
        dispatch,
        favoriteMovies.filter((id) => id !== movie.id)
      );
    } else {
      updateFavoriteMovies(dispatch, [...favoriteMovies, movie.id]);
    }
  };

  return (
    <Grid className="MovieCard" key={movie.id} item>
      <Paper
        sx={{
          height: 300,
          width: 250,
        }}
      >
        <IconButton onClick={onFavoriteClick} className="MovieCardFavorite">
          {isMovieFavorited ? <FavoriteOutlinedIcon /> : <FavoriteBorderIcon />}
        </IconButton>

        <h4 className="MovieCardTitle">{movie.title}</h4>
        <img
          className="MovieCardImage"
          src={`${imageBaseUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <Rating
          className="MovieCardRating"
          value={movie.vote_average / 2}
          readOnly
        />
      </Paper>
    </Grid>
  );
};

export default MovieCard;
