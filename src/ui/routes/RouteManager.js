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
