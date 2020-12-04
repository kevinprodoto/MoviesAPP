import React, {Component} from "react";

import PropTypes from 'prop-types';

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
        const {movies, loading} = this.props;

        return <section className="movies">
                    {movies.map(item => <Movie
                                        key={item.id}
                                        name={item.title} 
                                        description={item.overview}
                                        rating={item.vote_average}
                                        image={`https://image.tmdb.org/t/p/w200/${item.poster_path}?api_key=9ae97e145cfa535e840476b073e34378`}
                                        date={item.release_date}
                                        style={item.genre_ids}
                                        loading={loading}/>)}
               </section>
    }
}

MovieList.defaultProps = {
    movies: [],
    loading: true,
    updateMovies: () => {},
}
  
MovieList.propTypes = {
movies: PropTypes.number,
loading: PropTypes.bool,
updateMovies: PropTypes.number,
}