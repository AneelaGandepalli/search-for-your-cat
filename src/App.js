import React from "react";

import MoviesList from "./components/movies-list";
import MoviesSearch from "./components/movies-search";

import "./App.css";

function App() {
  return (
    <div className="App">
      <MoviesSearch />
      <MoviesList />
    </div>
  );
}

export default App;
