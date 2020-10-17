import axios from 'axios'

const currentWidth = () => {
    return Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    )
}

export const imageSizes = {
    poster: {
        w92: 'w92',
        w154: 'w154',
        w185: 'w185',
        w342: 'w342',
        w500: 'w500',
        w780: 'w780',
        original: 'original'
    },
    backdrop: {
        w300: 'w300',
        w780: 'w780',
        w1280: 'w1280',
        original: 'original'
    },
    profile: {
        w45: "w45",
        w185: "w185",
        h632: "h632",
        original: "original"
    }
}

class TmdbUtils {
    normalizeMovieResults(tmdbResults) {
        return tmdbResults
            .filter(tmdbResult => tmdbResult.poster_path)
            .map(tmdbResult => {
                return {
                    tmdb_id: tmdbResult.id,
                    title: tmdbResult.title,
                    rating: tmdbResult.vote_average,
                    release_date: tmdbResult.release_date,
                    synopsis: tmdbResult.overview,
                    poster_path: tmdbResult.poster_path,
                    backdrop_path: tmdbResult.backdrop_path
                }
            })
    }

    normalizeMovieDetails(tmdbResult) {
        const cast = tmdbResult.credits.cast
            .filter(castMember => castMember.profile_path)
            .map(castMember => {
                return {
                    id: castMember.id,
                    name: castMember.name,
                    character: castMember.character,
                    picture_url: castMember.profile_path
                }
            })

        const crew = tmdbResult.credits.crew
            .filter(crewMember => crewMember.job.includes('Director'))
            .map(crewMember => {
                return {
                    id: crewMember.id,
                    name: crewMember.name,
                    job: crewMember.job,
                    department: crewMember.department,
                    picture_url: crewMember.profile_path
                }
            })

        return {
            id: tmdbResult.id,
            tmdb_id: tmdbResult.id,
            title: tmdbResult.title,
            original_title: tmdbResult.original_title,
            release_date: tmdbResult.release_date,
            runtime: tmdbResult.runtime,
            synopsis: tmdbResult.overview,
            rating: tmdbResult.vote_average,
            poster_path: tmdbResult.poster_path,
            backdrop_path: tmdbResult.backdrop_path,
            genres: tmdbResult.genres,
            cast,
            crew
        }
    }
}

class TmdbClient {
    constructor() {
        this.imagesBaseUrl = 'https://image.tmdb.org/t/p/'

        // TODO Externalize config
        this.apiKey = 'b05e87f356ef223c5aeacf0bcae54d04'

        this.axiosInstance = axios.create({
            baseURL: 'https://api.themoviedb.org/3/',
            headers: { 'X-Requested-With': 'XMLHttpRequest' }
        })

        this.tmdbUtils = new TmdbUtils()
    }

    getPosterUrl(path) {
        const vWidth = currentWidth()
        let imageWidth = imageSizes.poster.original

        if (vWidth > 767) {
            imageWidth = imageSizes.poster.w342
        }

        else if (vWidth > 575) {
            imageWidth = imageSizes.poster.w154
        }

        else if (vWidth > 424) {
            imageWidth = imageSizes.poster.w185
        }

        else {
            imageWidth = imageSizes.poster.w154
        }

        return this.getPosterUrlForSize(path, imageWidth)
    }

    getBackdropUrl(path) {
        const vWidth = currentWidth()
        let imageWidth = imageSizes.backdrop.original

        if (vWidth < 400) {
            imageWidth = imageSizes.backdrop.w780
        }

        if (vWidth < 1200) {
            imageWidth = imageSizes.backdrop.w1280
        }

        return this.getBackdropUrlForSize(path, imageWidth)
    }

    getPosterUrlForSize(path, size) {
        return `${ this.imagesBaseUrl }${ size }${ path }`
    }

    getBackdropUrlForSize(path, size) {
        return `${ this.imagesBaseUrl}${ size }${ path }`
    }

    getPictureUrlForSize(path, size) {
        return `${ this.imagesBaseUrl }${ size }${ path }`
    }

    searchMovie(query, onResults, onError) {
        this.axiosInstance
            .get('search/movie', {
                params: {
                    api_key: this.apiKey,
                    query: query
                }
            }).then(res => {
                if (res.status === 200) {
                    let results = this
                        .tmdbUtils
                        .normalizeMovieResults(
                            res.data.results
                        )
                    
                    onResults(results)
                } else {
                    console.error(res)
                    onError()
                }
            })
            .catch(err => {
                console.error(err)
                onError()
            })
    }

    searchPopularMovies(onResults, onError) {
        this.axiosInstance
            .get('movie/popular', {params: { api_key: this.apiKey }})
            .then(res => {
                if (res.status === 200) {
                    let results = this
                        .tmdbUtils
                        .normalizeMovieResults(
                            res.data.results
                        )

                    onResults(results)
                } else {
                    console.error(res)
                    onError()
                }
            })
            .catch(err => {
                console.error(err)
                onError()
            })
    }

    getMovieDetails(tmdbId, onResult, onError) {
        this.axiosInstance
            .get(`movie/${ tmdbId }`, {
                params: {
                    api_key: this.apiKey,
                    append_to_response: 'credits'
                }
            })
            .then(res => {
                if (res.status === 200) {
                    const movie = this
                        .tmdbUtils
                        .normalizeMovieDetails(res.data)
                    
                    onResult(movie)
                } else {
                    console.error(res)
                    onError()
                }
            })
            .catch(err => {
                console.error(err)
                onError()
            })
    }
}

export default new TmdbClient()
