import { SpecialItemsIds } from '../components/sidebar/Sidebar'

export const routeSuggestions = '/suggestions'
export const routeIncoming = '/incoming'
export const routeGenres = '/genres'

export const makeListRoute = (listId) => {
    if (listId === SpecialItemsIds.INCOMING) {
        return routeIncoming
    }

    return routeSuggestions
}

export const makeMoviePreviewRoute = (tmdbId) => {
    return `/movie/${ tmdbId }/preview`
}

export const makePlayerTrailerRoute = (tmdbId, title) => {
    return `/movie/${ tmdbId }/trailer?title=${ title }`
}
