import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar'
import styles from './HeaderBar.module.scss'


const HeaderBar = ({ title, filter, onFilterChange }) => {
    const [searching, setSearching] = useState(false)

    const makeTitleOrSearch = () => {
        if (searching) {
            return <SearchBar
                filter={ filter }
                onFilterChange={ onFilterChange }
                onClose={ () => {
                    onFilterChange('')
                    setSearching(false)
                }}
            />
        }
        
        return (
            <>
                <h1 className={ styles.title }>{ title }</h1>
                <span
                    className={`
                        fas
                        fa-search
                        d-none d-sm-inline
                        ${ styles.toolbarBtn }
                    `}
                    onClick={ () => setSearching(true) }
                />
            </>
        )
    }

    return (
        <div className={ styles.headerBar }>
            { makeTitleOrSearch() }

            <span
                className={`
                    fas
                    fa-share-alt
                    d-none d-md-inline
                    ${ styles.toolbarBtn }
                `}
                onClick={ () => {
                    console.log('Share clicked')
                }}
            />

            <span
                className={ `fas fa-ellipsis-v ${ styles.toolbarBtn }` }
                onClick={ () => {
                    console.log('Options clicked')
                }}
            />
        </div>
    )
}

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
}

export default HeaderBar;
