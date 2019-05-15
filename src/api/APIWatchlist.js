import axios from 'axios';
import AuthService from "../auth/AuthService";

export default class APIWatchlist {
    static get baseUrl() {
        return "http://localhost:8000/api/";
    }

    // Auth web services

    /**
     * Verifies or registers a client on backend
     *
     * @param {object} credentials
     * @param {string} credentials.name
     * @param {string} credentials.email
     * @param {string} credentials.picture
     * @param {string} credentials.token
     * @param {string} credentials.auth_provider_id
     * @returns {AxiosPromise<any>}
     */
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
        const token = AuthService.currentSessionToken();

        return axios.get(url, {
            headers: {
                Authorization: `Bearer ${ token }`
            }
        });
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
