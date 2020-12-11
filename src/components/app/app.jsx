import React from "react";

import PropTypes from 'prop-types';

import AppHeader from "../header/index"

import MovieList from "../movieList/index"

import AppFooter from "../footer/index"

const App = ({guestId, notRatedMovies, ratedMovies, rated, movies, loading, updateMovies, onChange, label, page, totalResults}) => {
  return <section className ="todoapp">
    <AppHeader notRatedMovies = {notRatedMovies} rated = {rated} ratedMovies = {ratedMovies} onChange = {onChange} updateMovies = {updateMovies}/>
    <MovieList guestId = {guestId} totalResults = {totalResults} updateMovies = {updateMovies} movies = {movies} loading = {loading}/>
    <AppFooter updateMovies = {updateMovies} label = {label} page = {page}/>
  </section>
}

App.defaultProps = {
  movies: [],
  loading: true,
  updateMovies: () => {},
  onChange: () => {},
  label: "",
  page: 1,
  totalResults: 0,
  ratedMovies: () => {},
  rated: false,
  notRatedMovies: () => {},
  guestId: "",
}

App.propTypes = {
  guestId: PropTypes.string,
  movies: PropTypes.instanceOf(Array),
  loading: PropTypes.bool,
  updateMovies: PropTypes.func,
  onChange: PropTypes.func,
  label: PropTypes.string,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  ratedMovies: PropTypes.func,
  rated: PropTypes.bool,
  notRatedMovies: PropTypes.func,
}

export default App;