import React, { useState } from 'react'

import {
    AppContainer,
    SidebarContainer,
    ContentContainer
} from './layout/LayoutContainers'

const WatchlistApp = () => {
    const [mobileSidebarActive, setMobileSidebarActive] = useState(false)

    return <AppContainer>
        <SidebarContainer
            mobileSidebarActive={ mobileSidebarActive }
            setMobileSidebarActive={ setMobileSidebarActive }
        />
        <ContentContainer/>
    </AppContainer>
}

export default WatchlistApp
