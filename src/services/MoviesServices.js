import AppFooter from "../components/footer/index"

export default class MoviesServices {
    constructor(page = 1, query = "return") {
        this.page = page;
        this.query = query;
    }

    state = {
        cuurentPage: AppFooter.defaultCurrent
    }

    reqObj = {
        api_key: "9ae97e145cfa535e840476b073e34378",
        mode: "no-cors",
        language: "en-US",
        page: 2,
        include_adult: false,
    }

    apiBase = "https://api.themoviedb.org"

    async getResource(url) {
        console.log(`${this.apiBase}${url}?api_key=${this.reqObj.api_key}&query=${this.query}&page=${this.page}`)
        const res = await fetch(`${this.apiBase}${url}?api_key=${this.reqObj.api_key}&query=${this.query}&page=${this.page}`);
        const body = await res.json();
        console.log(body)
        return body;
    }

    getAllMovies() {
        return this.getResource(`/3/search/movie`)
    }
}
