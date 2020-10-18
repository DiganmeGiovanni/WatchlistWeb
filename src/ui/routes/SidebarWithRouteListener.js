import React from 'react'
import { useLocation } from 'react-router-dom'

import { routeSuggestions, routeIncoming } from './RouteManager'
import Sidebar, { SpecialItemsIds } from '../components/sidebar/Sidebar'

const SidebarWithRouteListener = ({ selectedListId, ...props }) => {
    const location = useLocation()

    let currentListId = selectedListId
    if (location.pathname.endsWith(routeSuggestions)) {
        currentListId = SpecialItemsIds.SUGGESTIONS
    } else if (location.pathname.endsWith(routeIncoming)) {
        currentListId = SpecialItemsIds.INCOMING
    }

    return <Sidebar
        selectedListId={ currentListId }
        { ...props }
    />
}

export default SidebarWithRouteListener
