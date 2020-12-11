export default async function GuestSession() {
    const res = await fetch("https://api.themoviedb.org/3/authentication/guest_session/new?api_key=9ae97e145cfa535e840476b073e34378");
    const body = await res.json();
    return body;
}