import React from 'react'
import PropTypes from 'prop-types'

import ToolbarBtn from './ToolbarBtn'

import styles from './Header.module.scss'

const Header = ({ title, titleJSX, onBackClicked, children }) => {
    const makeTitle = () => {
        if (title) {
            return <h1 className={ styles.title }>{ title }</h1>
        }

        return titleJSX
    }

    

    return <div className={ styles.headerBar }>
        { onBackClicked && <ToolbarBtn
            classes={`${ styles.backBtn } fas fa-chevron-left`}
            onClick={ () => { onBackClicked() }}
        /> }
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

    /**
     * (Optional) If present, back button will be rendered and
     * provided function invoked on click events
     */
    onBackClicked: PropTypes.func
}

export default Header
