import axios from 'axios';

export default class APIWatchlist {
    static get baseUrl() {
        return "http://localhost:8000/api/";
    }

    // Auth web services

    static login(credentials) {
        const url = `${APIWatchlist.baseUrl}login`;

        return axios.post(
            url,
            credentials
        );
    }

    // Lists web services

    static getLists(userId) {
        const url = `${APIWatchlist.baseUrl}user/${userId}/lists`;
        return axios.get(url);
    }

    static postList(userId, watchlist) {
        const url = `${APIWatchlist.baseUrl}user/${userId}/lists`;
        return axios.post(url, watchlist);
    }

    // Movies web services

    static getMovies(listId) {
        const url = `${APIWatchlist.baseUrl}lists/${listId}/movies`;
        return axios.get(url);
    }

    static postMovie(listId, moviePost) {
        const url = `${APIWatchlist.baseUrl}lists/${listId}/movies`;
        return axios.post(url, moviePost);
    }
}
