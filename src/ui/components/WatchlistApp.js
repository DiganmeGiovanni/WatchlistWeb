import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {
    AppContainer,
    SidebarContainer,
    ContentContainer
} from './layout/LayoutContainers'
import Sidebar from './sidebar/Sidebar'
import SuggestionsList from './specialLists/suggestions/SuggestionsList'
import MoviePreviewRoute from './moviePicker/moviePreview/MoviePreviewRoute'

import '../styles/global.scss'

const WatchlistApp = () => {
    const [mobileSidebarActive, setMobileSidebarActive] = useState(false)

    return <AppContainer>
        <SidebarContainer
            mobileSidebarActive={ mobileSidebarActive }
            setMobileSidebarActive={ setMobileSidebarActive }
        >
            <Sidebar
                selectList={ (listId) => {
                    console.log(`selected list id: ${listId}`)
                }}
            />
        </SidebarContainer>

        <ContentContainer>
            <Router>
                <Switch>
                    <Route
                        path='/movie/:tmdbId/preview'
                        component={ MoviePreviewRoute }
                    />
                    <Route path='/' component={ SuggestionsList } />
                </Switch>
            </Router>
        </ContentContainer>
    </AppContainer>
}

export default WatchlistApp
