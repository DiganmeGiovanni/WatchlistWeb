import React, { useState } from "react"
import PropTypes from "prop-types"

import { hasMovieType } from "../../types/WatchlistTypes"
import HeaderBar from './headerBar/HeaderBar'
import ListContent from './ListContent'

import styles from './List.module.scss'

const List = ({ isFetching, listTitle, hasMovies }) => {
    const [filter, setFilter] = useState('')

    let filteredMovies = hasMovies
    if (filter) {
        filteredMovies = filteredMovies.filter(hasMovie => {
            return hasMovie
                .movie
                .title
                .toUpperCase()
                .includes(filter.toUpperCase())
        })
    }

    return  (
        <div className={ styles.list }>
            <div className='container-fluid'>
                <HeaderBar
                    title={ listTitle }
                    filter={ filter }
                    onFilterChange={ filter => setFilter(filter) }
                />

                <ListContent
                    isFetching={ isFetching }
                    hasMovies={ filteredMovies }
                />
            </div>
        </div>
    )
}

List.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    listTitle: PropTypes.string.isRequired,
    hasMovies: PropTypes.arrayOf(hasMovieType)
}

export default List;
