import React from "react";
import { useDispatch } from "react-redux";
import debounce from "lodash/debounce";
import TextField from "@mui/material/TextField";

import { searchMovieByName } from "../redux/actions/actions";

const MoviesSearch = () => {
  const dispatch = useDispatch();

  const onChange = (e) => {
    const query = e.target.value;
    searchMovieByName(dispatch, query);
  };

  return (
    <div className="MoviesSearch">
      <TextField
        id="outlined-search"
        onChange={debounce(onChange, 600)}
        label="Search for movie"
        type="search"
      />
    </div>
  );
};

export default MoviesSearch;
