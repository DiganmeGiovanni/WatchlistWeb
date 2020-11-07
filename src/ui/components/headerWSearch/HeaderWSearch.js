import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Header from '../header/Header'
import SearchBar from './SearchBar'
import ToolbarBtn from '../header/ToolbarBtn'


const HeaderWSearch = ({ title, filter, onFilterChange, children }) => {
    const [searching, setSearching] = useState(false)

    if (searching) {
        const titleJSX = <SearchBar
            filter={ filter }
            onFilterChange={ onFilterChange }
            onClose={ () => {
                onFilterChange('')
                setSearching(false)
            }}
        />

        return <Header titleJSX={ titleJSX }>{ children }</Header>
    }

    return <Header title={ title }>
        <ToolbarBtn
            classes='fas fa-search d-none d-sm-inline'
            onClick={ () => setSearching(true) }
        />

        { children }
    </Header>
}

HeaderWSearch.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default HeaderWSearch
