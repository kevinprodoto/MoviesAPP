import AppFooter from "../components/footer/index"

export default class MoviesServices {
    state = {
        cuurentPage: AppFooter.defaultCurrent
    }

    reqObj = {
        api_key: "9ae97e145cfa535e840476b073e34378",
        query: "return",
        mode: "no-cors",
        language: "en-US",
        page: 1,
        include_adult: false,
    }

    apiBase = "https://api.themoviedb.org"

    async getResource(url) {
        const res = await fetch(`${this.apiBase}${url}?api_key=${this.reqObj.api_key}&language=en-US&query=return&include_adult=false&page=1`);
        const body = await res.json();
        return body;
    }

    getAllMovies() {
        return this.getResource(`/3/search/movie`)
    }
}
