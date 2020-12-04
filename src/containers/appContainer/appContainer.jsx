import React, {Component} from "react";

import MoviesServices from "../../services/MoviesServices";

import App from "../../components/app/index";

export default class AppContainer extends Component {
    state= {
        loading: true,
        movies: [],
    }

    updateMovies = (pageNumber) => {
        const moviesServices = new MoviesServices(pageNumber);
        moviesServices.getAllMovies().then((res) => {
            this.setState(() => {
                return {
                    movies: res.results,
                    loading: false,
                }
            })
        }).then(() => {
            this.setState(() => {
                return {
                    loading: false,
                }
            })
        }).catch(this.onError);
    }

    render() {
        const { movies, loading} = this.state;
        return <App movies= {movies} 
                    loading = {loading} 
                    onChange = {this.onChange}
                    updateMovies = {this.updateMovies}/>
    }
        
}