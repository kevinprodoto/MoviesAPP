import React, {Component} from "react";

import MoviesServices from "../../services/MoviesServices";

import GetRatedMovies from "../../services/GetRatedMovies";

import App from "../../components/app/index";

import genresRequest from "../../tools/genres";

import {GenresProvider} from "../../components/genresContext/index";

import GuestSession from "../../services/GuestSession";

export default class AppContainer extends Component {
    state= {
        loading: true,
        movies: [],
        label: "return",
        page: 1,
        totalResults: 0,
        guestId: "asdasd",
        rated: false,
    }

    componentDidMount() {
        GuestSession().then((res) => {
            this.setState(() => {
                return {
                    guestId: res.guest_session_id,
                }
            })
        })
    }

    ratedMovies = async () => {
        await this.setState(() => {
            return {
                rated: true,
            }
        })
        await this.updateMovies();
    }

    notRatedMovies = async () => {
        await this.setState(() => {
            return {
                rated: false,
            }
        })
        await this.updateMovies();
    }

    onLabelChange = (str) => {
        this.setState(() => {
            return {
                label: str
            }
        })
    }

    getGenres = () => {
        genresRequest().then((res) => {
            const genresObj = {};
            res.genres.forEach(item => {
                genresObj[item.id] = item.name;
            })
            return genresObj;
        }).then((res) => {
            this.setState(() => {
                return {
                    genres: res 
                }
            })
        })
    }

    updateMovies = (pageNumber, query) => {
        const {rated} = this.state;
        const {guestId} = this.state;
        if (query) this.onLabelChange(query);
        if (rated) {
            const getRatedMovies = new GetRatedMovies(guestId);
            getRatedMovies.getAllMovies().then((res) => {
                this.setState(() => {
                    return {
                        totalResults: res.total_results,
                        page: res.page,
                        movies: res.results,
                        loading: false,
                    }
                })
            })

        } else {
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
    }

    render() {
        const { guestId, movies, loading, label, page, totalResults, genres, rated} = this.state;
        this.getGenres();
        return <GenresProvider value={genres}>
            <App 
                guestId = {guestId}
                notRatedMovies = {this.notRatedMovies}
                rated = {rated}
                ratedMovies = {this.ratedMovies}
                movies= {movies} 
                loading = {loading}
                updateMovies = {this.updateMovies}
                onChange = {this.onLabelChange}
                label = {label}
                page = {page}
                totalResults = {totalResults}/>
        </GenresProvider>
    }
        
}