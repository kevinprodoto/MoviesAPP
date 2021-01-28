import React from 'react'

import PropTypes from 'prop-types'

import Header from '../Header'

import MovieList from '../MovieList'

import Footer from '../Footer'

const App = ({
    error,
    guestId,
    notRatedMovies,
    ratedMovies,
    rated,
    movies,
    loading,
    updateMovies,
    onChange,
    label,
    page,
    totalResults,
    getGenres,
    changePage,
}) => {
    return (
        <section className="todoapp">
            <Header
                notRatedMovies={notRatedMovies}
                rated={rated}
                ratedMovies={ratedMovies}
                onChange={onChange}
                updateMovies={updateMovies}
            />
            <MovieList
                getGenres={getGenres}
                error={error}
                guestId={guestId}
                totalResults={totalResults}
                updateMovies={updateMovies}
                movies={movies}
                loading={loading}
            />
            <Footer
                changePage={changePage}
                movies={movies}
                updateMovies={updateMovies}
                label={label}
                page={page}
                rated={rated}
            />
        </section>
    )
}

App.defaultProps = {
    movies: [],
    loading: true,
    updateMovies: () => {},
    onChange: () => {},
    label: '',
    page: 1,
    totalResults: 0,
    ratedMovies: () => {},
    rated: false,
    notRatedMovies: () => {},
    guestId: '',
    error: false,
    getGenres: () => {},
    changePage: () => {},
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
    error: PropTypes.bool,
    getGenres: PropTypes.func,
    changePage: PropTypes.func,
}

export default App
