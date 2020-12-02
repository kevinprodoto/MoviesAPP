import React, {Component} from "react";

import MoviesServices from "../../services/MoviesServices";

import  Movie from "../movie/index";

export default class MovieList extends Component {

    moviesServices = new MoviesServices();
    
    state = {
        movies: [],
        loading: true
    }

    onError = () => {

    }

    render() {
        const {movies, loading} = this.state;
        this.moviesServices.getAllMovies().then((res) => {
            this.setState(() => {
                return {
                    movies: res.results,
                    loading: false,
                }
            })
        }).catch(this.onError);
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