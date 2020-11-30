

class MoviesService {

    _apiBase = "https://www.themoviedb.org/documentation/api/discover/"

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        const body = await res.json();
        return await body;
    }
    getAllMovies() {
        return this.getResource("movie?sort_by=popularity.desc")
    }
}

const movies = new MoviesService();

movies.getAllMovies().then((body) => {
    console.log(body)
})

