import React from 'react'
import PropTypes from 'prop-types'

import styles from './HeaderBar.module.scss'

const Toolbar = ({ filter, onFilterChange }) => {

    return (
        <div>
            <input
                type='text'
                className={ styles.inpSearch }
                onChange={ onFilterChange }
                value={ filter }
            />
        </div>
    )
}

Toolbar.propTypes = {
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default Toolbar
