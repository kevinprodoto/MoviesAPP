import React, {Component} from "react";

import PropTypes from 'prop-types';

import {Spin} from "antd"

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
        const {movies, loading, totalResults} = this.props;
        if (movies.length === 0 && loading) {
            return <Spin size="large" wrapperClassName="spinnerWrapper"/>
        }
        if (totalResults === 0 && !loading) {
            return <p className="noSearch">The search returned no results.</p>
        }

        return <section className="movies">
                    {movies.map(item => <Movie
                                        key={item.id}
                                        id={item.id}
                                        name={item.title} 
                                        description={item.overview}
                                        rating={item.vote_average}
                                        image={`https://image.tmdb.org/t/p/w200/${item.poster_path}?api_key=9ae97e145cfa535e840476b073e34378`}
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
}
  
MovieList.propTypes = {
movies: PropTypes.instanceOf(Array),
loading: PropTypes.bool,
updateMovies: PropTypes.func,
totalResults: PropTypes.number,
}