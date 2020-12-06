export async function genresRequest() {
    const res = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9ae97e145cfa535e840476b073e34378&language=en-US");
    const body = await res.json();
    return body;
}