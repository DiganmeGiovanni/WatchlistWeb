import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

const Header = ({ title, titleJSX, children }) => {
    const makeTitle = () => {
        if (title) {
            return <h1 className={ styles.title }>{ title }</h1>
        }

        return titleJSX
    }

    return <div className={ styles.headerBar }>
        <div className={ styles.titleContainer }>
            { makeTitle() }
        </div>

        { children }
    </div>
}

Header.propTypes = {
    /** If present, will be rendered as header text */
    title: PropTypes.string,
    
    /** If title isn't present, this will be rendered as title component */
    titleJSX: PropTypes.object,
}

export default Header
