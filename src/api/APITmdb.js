export default class APITmdb {
    static get baseUrl() {
        return "https://image.tmdb.org/t/p/";
    }

    static get WIDTH() {
        return {
            poster: {
                w92: "w92",
                w154: "w154",
                w185: "w185",
                w342: "w342",
                w500: "w500",
                w780: "w780",
                original: "original"
            },
            backdrop: {
                w300: "w300",
                w780: "w780",
                w1280: "w1280",
                original: "original"
            }
        }
    }

    static posterUrl(path, width) {
        return `${ this.baseUrl }${ width }${ path }`
    }
}
