import Footer from '../components/Footer'

export default class MoviesServices {
    constructor(page = 1, query = 'return') {
        this.page = page
        this.query = query
    }

    state = {
        cuurentPage: Footer.defaultCurrent,
    }

    reqObj = {
        api_key: '9ae97e145cfa535e840476b073e34378',
        mode: 'no-cors',
        language: 'en-US',
        page: 2,
        include_adult: false,
    }

    apiBase = 'https://api.themoviedb.org'

    async getResource(url) {
        const res = await fetch(
            `${this.apiBase}${url}?api_key=${this.reqObj.api_key}&query=${this.query}&page=${this.page}`
        )
        const body = await res.json()
        return body
    }

    getAllMovies() {
        return this.getResource(`/3/search/movie`)
    }
}
