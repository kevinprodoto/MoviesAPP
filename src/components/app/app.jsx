import React from "react";

import PropTypes from 'prop-types';

import AppHeader from "../header/index"

import MovieList from "../movieList/index"

import AppFooter from "../footer/index"

const App = ({movies, loading, updateMovies, onChange, label, page, totalResults}) => {
  return <section className ="todoapp">
    <AppHeader onChange = {onChange} updateMovies = {updateMovies}/>
    <MovieList totalResults = {totalResults} updateMovies = {updateMovies} movies = {movies} loading = {loading} />
    <AppFooter updateMovies = {updateMovies} label = {label} page = {page}/>
  </section>
}

App.defaultProps = {
  movies: 0,
  loading: true,
  updateMovies: () => {},
  onChange: () => {},
  label: "",
  page: 1,
  totalResults: 0,
}

App.propTypes = {
  movies: PropTypes.number,
  loading: PropTypes.bool,
  updateMovies: PropTypes.string,
  onChange: PropTypes.string,
  label: PropTypes.string,
  page: PropTypes.number,
  totalResults: PropTypes.number,
}

export default App;