import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { routeSuggestions, routeIncoming, makeListRoute } from '../routes/RouteManager'
import Sidebar, { SpecialItemsIds } from '../components/sidebar/Sidebar'

const RoutableSidebar = ({ selectedListId, ...props }) => {
    const location = useLocation()
    const history = useHistory()

    let currentListId = selectedListId
    if (location.pathname.endsWith(routeSuggestions)) {
        currentListId = SpecialItemsIds.SUGGESTIONS
    } else if (location.pathname.endsWith(routeIncoming)) {
        currentListId = SpecialItemsIds.INCOMING
    }

    return <Sidebar
        selectedListId={ currentListId }
        selectList={(listId) => {
            
            history.push(makeListRoute(listId))
        }}
        { ...props }
    />
}

export default RoutableSidebar
