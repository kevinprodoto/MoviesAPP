import React, { Component } from 'react'

import MoviesServices from '../../services/MoviesServices'

import GetRatedMovies from '../../services/GetRatedMovies'

import App from '../../components/App'

import universalReq from '../../tools/uniReq'

import { GenresProvider } from '../../components/genresContext'

export default class AppContainer extends Component {
    state = {
        loading: true,
        movies: [],
        label: 'return',
        page: 1,
        totalResults: 0,
        guestId: 'asdasd',
        rated: false,
        error: false,
    }

    componentDidMount() {
        if (!localStorage.getItem('questSession')) {
            universalReq('guest').then((res) => {
                localStorage.setItem('questSession', res.guest_session_id)
                this.setState(() => {
                    return {
                        guestId: res.guest_session_id,
                    }
                })
            })
        } else {
            this.setState(() => {
                return {
                    guestId: localStorage.getItem('questSession'),
                }
            })
        }
    }

    ratedMovies = async () => {
        await this.setState(() => {
            return {
                rated: true,
            }
        })
        await this.updateMovies()
    }

    notRatedMovies = async () => {
        const { label, page } = this.state
        await this.setState(() => {
            return {
                rated: false,
            }
        })
        await this.updateMovies(page, label)
    }

    onLabelChange = (str) => {
        this.setState(() => {
            return {
                label: str,
            }
        })
    }

    getGenres = () => {
        universalReq('genres')
            .then((res) => {
                const genresObj = {}
                res.genres.forEach((item) => {
                    genresObj[item.id] = item.name
                })
                return genresObj
            })
            .then((res) => {
                this.setState(() => {
                    return {
                        genres: res,
                    }
                })
            })
    }

    onError = (err) => {
        this.setState(() => {
            return {
                error: err,
            }
        })
    }

    changePage = (number) => {
        this.setState(() => {
            return {
                page: number,
            }
        })
    }

    updateMovies = (pageNumber, query) => {
        const { rated, guestId } = this.state
        if (query) this.onLabelChange(query)
        if (rated) {
            this.getReq('rated', pageNumber, query, guestId)
        } else {
            this.getReq('allMovies', pageNumber, query, guestId)
        }
    }

    getReq = (string, pageNumber, query, guestId) => {
        let req
        if (string === 'allMovies') {
            req = new MoviesServices(pageNumber, query)
        } else if (string === 'rated') {
            req = new GetRatedMovies(guestId)
        }
        req.getAllMovies()
            .then((res) => {
                this.setState(() => {
                    return {
                        totalResults: res.total_results,
                        page: res.page,
                        movies: res.results,
                        loading: false,
                    }
                })
            })
            .catch(this.onError)
    }

    render() {
        const { error, guestId, movies, loading, label, page, totalResults, genres, rated } = this.state
        return (
            <GenresProvider value={genres}>
                <App
                    error={error}
                    guestId={guestId}
                    notRatedMovies={this.notRatedMovies}
                    rated={rated}
                    ratedMovies={this.ratedMovies}
                    movies={movies}
                    loading={loading}
                    updateMovies={this.updateMovies}
                    onChange={this.onLabelChange}
                    label={label}
                    page={page}
                    totalResults={totalResults}
                    getGenres={this.getGenres}
                    changePage={this.changePage}
                />
            </GenresProvider>
        )
    }
}
