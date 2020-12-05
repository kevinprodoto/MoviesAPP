import React from "react";

import PropTypes from 'prop-types';

import AppHeader from "../header/index"

import MovieList from "../movieList/index"

import AppFooter from "../footer/index"

const App = ({movies, loading, updateMovies, onChange, label}) => {
  return <section className ="todoapp">
    <AppHeader onChange = {onChange} label = {label} updateMovies = {updateMovies}/>
    <MovieList updateMovies = {updateMovies} movies = {movies} loading = {loading} />
    <AppFooter updateMovies = {updateMovies} />
  </section>
}

App.defaultProps = {
  movies: 0,
  loading: true,
  updateMovies: () => {},
  onChange: () => {},
  label: "",
}

App.propTypes = {
  movies: PropTypes.number,
  loading: PropTypes.bool,
  updateMovies: PropTypes.string,
  onChange: PropTypes.string,
  label: PropTypes.string,
}

export default App;