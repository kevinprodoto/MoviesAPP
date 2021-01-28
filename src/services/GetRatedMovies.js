export default class GetRatedMovies {
    constructor(guestId) {
        this.guestId = guestId
    }

    reqObj = {
        api_key: '9ae97e145cfa535e840476b073e34378',
    }

    apiBase = 'https://api.themoviedb.org'

    async getResource(url) {
        const res = await fetch(
            `${this.apiBase}${url}${this.guestId}/rated/movies?api_key=${this.reqObj.api_key}&language=en-US&sort_by=created_at.asc`
        )
        const body = await res.json()
        return body
    }

    getAllMovies() {
        return this.getResource(`/3/guest_session/`)
    }
}
