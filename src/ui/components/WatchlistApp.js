import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import {
    AppContainer,
    SidebarContainer,
    ContentContainer
} from './layout/LayoutContainers'
import SuggestionsList from './specialLists/suggestions/SuggestionsList'
import IncomingList from './specialLists/incoming/IncomingList'

import SidebarWithRouteListener from '../routes/SidebarWithRouteListener'
import HomeRoute from '../routes/HomeRoute'
import MoviePreviewRoute from './moviePicker/moviePreview/MoviePreviewRoute'

import '../styles/global.scss'

const WatchlistApp = () => {
    const [mobileSidebarActive, setMobileSidebarActive] = useState(false)
    

    return <AppContainer>
        <Router>
            <SidebarContainer
                mobileSidebarActive={ mobileSidebarActive }
                setMobileSidebarActive={ setMobileSidebarActive }
            >
                <SidebarWithRouteListener/>
            </SidebarContainer>

            <ContentContainer>
                     <Switch>
                        <Route path='/suggestions' component={ SuggestionsList } />
                        <Route path='/incoming' component={ IncomingList } />

                        <Route
                            path='/movie/:tmdbId/preview'
                            component={ MoviePreviewRoute }
                        />

                        <Route path='/' component={ HomeRoute }/>
                    </Switch>
            </ContentContainer>
        </Router>
    </AppContainer>
}

export default WatchlistApp
