import React from "react";

import PropTypes from 'prop-types';

import AppHeader from "../header/index"

import MovieList from "../movieList/index"

import AppFooter from "../footer/index"

const App = ({movies, loading, updateMovies}) => {
  return <section className ="todoapp">
    <AppHeader />
    <MovieList updateMovies = {updateMovies} movies = {movies} loading = {loading} />
    <AppFooter updateMovies = {updateMovies} />
  </section>
}

App.defaultProps = {
  movies: 0,
  loading: true,
  updateMovies: () => {},
}

App.propTypes = {
  movies: PropTypes.number,
  loading: PropTypes.bool,
  updateMovies: PropTypes.string,
}

export default App;