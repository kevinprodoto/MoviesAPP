import React from "react";

import AppHeader from "../header/index"

import MovieList from "../movieList/index"

import AppFooter from "../footer/index"

const App = () => {
  return <section className ="todoapp">
    <AppHeader />
    <MovieList />
    <AppFooter />
  </section>
}

export default App;