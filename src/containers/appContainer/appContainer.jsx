import React, {Component} from "react";

import MoviesServices from "../../services/MoviesServices";

import App from "../../components/app/index";

export default class AppContainer extends Component {
    state= {
        loading: true,
        movies: [],
        label: "",
    }

    onLabelChange = (evv) => {
        this.setState(() => {
            return {
                label: evv.target.label
            }
        })
    }

    updateMovies = (pageNumber, query) => {
        const moviesServices = new MoviesServices(pageNumber, query);
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
        const { movies, loading, label} = this.state;
        return <App movies= {movies} 
                    loading = {loading}
                    updateMovies = {this.updateMovies}
                    onChange = {this.onLabelChange}
                    label = {label}/>
    }
        
}