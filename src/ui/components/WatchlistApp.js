import React, { useState } from 'react'

import {
    AppContainer,
    SidebarContainer,
    ContentContainer
} from './layout/LayoutContainers'
import Sidebar from './sidebar/Sidebar'

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

        <ContentContainer/>
    </AppContainer>
}

export default WatchlistApp
