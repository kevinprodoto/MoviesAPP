import React, {Component} from "react";

import PropTypes from 'prop-types';

import {Spin, Alert} from "antd"

import  Movie from "../movie/index";

export default class MovieList extends Component {

    componentDidMount() {
        const {updateMovies} = this.props;
        updateMovies();
    }

    onError = () => {
        return <p>Это не те дроиды, которых ты ищешь!</p>
    }
    
    render() {
        const {error, movies, loading, totalResults, guestId} = this.props;
        if (movies.length === 0 && loading) {
            return <Spin size="large" wrapperClassName="spinnerWrapper"/>
        }
        if (totalResults === 0 && !loading) {
            return <p className="noSearch">The search returned no results.</p>
        }
        if (error) {
            return <Alert message="Error Text" type="error" />
        }
        return <section className="movies">
                    {movies.map(item => <Movie
                                        raiting = {item.raiting}
                                        guestId = {guestId}
                                        key={item.id}
                                        id={item.id}
                                        name={item.title} 
                                        description={item.overview}
                                        rating={item.vote_average}
                                        image={item.poster_path}
                                        date={item.release_date}
                                        style={item.genre_ids}/>)}
               </section>
    }
}

MovieList.defaultProps = {
    movies: [],
    loading: true,
    updateMovies: () => {},
    totalResults: 0,
    guestId: "",
    error: false,
}
  
MovieList.propTypes = {
    guestId: PropTypes.string,
    movies: PropTypes.instanceOf(Array),
    loading: PropTypes.bool,
    updateMovies: PropTypes.func,
    totalResults: PropTypes.number,
    error: PropTypes.bool,
}