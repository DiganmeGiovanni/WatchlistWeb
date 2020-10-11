import React from 'react'
import propTypes from 'prop-types'

import styles from './LayoutContainer.module.scss'

export const AppContainer = ({ children }) => {
    return <div className={ styles.watchlistApp }>
        { children }
    </div>
}

export const SidebarContainer = ({ 
    mobileSidebarActive,
    setMobileSidebarActive,
    children
}) => {

    if (mobileSidebarActive) {
        return <div className={ styles.mobileSidebarWrapper }>
            <div className={ styles.mobileSidebarContainer }>{ children }</div>
            <div
                className={ styles.mobileSidebarDeadSpace }
                onClick={ () => setMobileSidebarActive(false) }
            ></div>
        </div>
    } else {
        return (
            <div className={ styles.sidebarContainer }>
                { children }
            </div>
        )
    }
}

export const ContentContainer = ({ children }) => {
    return <div className={ styles.content }>{ children }</div>
}

SidebarContainer.propTypes = {
    mobileSidebarActive: propTypes.bool.isRequired,
    setMobileSidebarActive: propTypes.func.isRequired
}

ContentContainer.propTypes = {
    toggleSidebarVisibility: propTypes.func.isRequired
}
