import axios from 'axios';

const baseUrl = "http://localhost:8000/api/";
let axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
});

export default class APIWatchlist {

    static setAuthToken(token) {
        axiosInstance = axios.create({
            baseURL: baseUrl,
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Authorization': `Bearer ${ token }`
            }
        })
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
        const url = `${ baseUrl }login`;

        return axiosInstance.post(
            url,
            credentials
        );
    }

    // Lists web services

    static getLists(userId) {
        const url = `${ baseUrl }user/${userId}/lists`;

        return axiosInstance.get(url);
    }

    static postList(userId, watchlist) {
        const url = `${ baseUrl }user/${userId}/lists`;
        return axiosInstance.post(url, watchlist);
    }

    // Movies web services

    static getMovies(listId) {
        const url = `${ baseUrl }lists/${listId}/movies`;
        return axiosInstance.get(url);
    }

    static postMovie(listId, moviePost) {
        const url = `${ baseUrl }lists/${listId}/movies`;
        return axiosInstance.post(url, moviePost);
    }
}
