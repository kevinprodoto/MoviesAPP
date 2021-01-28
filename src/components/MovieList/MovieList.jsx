import React, { Component } from 'react'

import PropTypes from 'prop-types'

import { Spin, Alert } from 'antd'

import Movie from '../Movie'

export default class MovieList extends Component {
    componentDidMount() {
        const { updateMovies, getGenres } = this.props
        getGenres()
        updateMovies()
    }

    render() {
        const { error, movies, loading, totalResults, guestId } = this.props
        if (movies.length === 0 && loading) {
            return <Spin size="large" wrapperClassName="spinnerWrapper" />
        }
        if (totalResults === 0 && !loading) {
            return <p className="noSearch">The search returned no results.</p>
        }
        if (error) {
            if (error) {
                return <Alert className="alert" message="Check your network connection!" type="error" />
            }
        }
        return (
            <section className="MoviesList">
                {movies.map((item) => (
                    <Movie
                        raiting={item.rating}
                        guestId={guestId}
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        description={item.overview}
                        rating={item.vote_average}
                        image={item.poster_path}
                        date={item.release_date}
                        style={item.genre_ids}
                    />
                ))}
            </section>
        )
    }
}

MovieList.defaultProps = {
    movies: [],
    loading: true,
    updateMovies: () => {},
    totalResults: 0,
    guestId: '',
    error: false,
    getGenres: () => {},
}

MovieList.propTypes = {
    guestId: PropTypes.string,
    movies: PropTypes.instanceOf(Array),
    loading: PropTypes.bool,
    updateMovies: PropTypes.func,
    totalResults: PropTypes.number,
    error: PropTypes.bool,
    getGenres: PropTypes.func,
}
