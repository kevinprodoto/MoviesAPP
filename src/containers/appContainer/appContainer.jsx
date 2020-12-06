import React, {Component} from "react";

import MoviesServices from "../../services/MoviesServices";

import App from "../../components/app/index";

export default class AppContainer extends Component {
    state= {
        loading: true,
        movies: [],
        label: "",
        page: 1,
        totalResults: 0,
    }

    onLabelChange = (str) => {
        this.setState(() => {
            return {
                label: str
            }
        })
    }

    updateMovies = (pageNumber, query) => {
        if (query) this.onLabelChange(query);
        const moviesServices = new MoviesServices(pageNumber, query);
        moviesServices.getAllMovies().then((res) => {
            this.setState(() => {
                return {
                    totalResults: res.total_results,
                    page: res.page,
                    movies: res.results,
                    loading: false,
                }
            })
        }).catch(this.onError);
    }

    render() {
        const { movies, loading, label, page, totalResults} = this.state;
        return <App movies= {movies} 
                    loading = {loading}
                    updateMovies = {this.updateMovies}
                    onChange = {this.onLabelChange}
                    label = {label}
                    page = {page}
                    totalResults = {totalResults}/>
    }
        
}