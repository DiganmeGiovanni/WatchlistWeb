import React from 'react'
import PropTypes from 'prop-types'

import { movieGridItemType } from '../../../../types/WatchlistTypes'

import styles from './MovieGridItem.module.scss'

const MovieGridItem = ({ gridItemData, onSelect }) => {
    return <div
        className={ styles.movieGridItem }
        onClick={ () => onSelect(gridItemData.tmdb_id) }
    >
        <div
            className={ styles.poster }
            style={{ backgroundImage: `url(${ gridItemData.poster_url })`}}
        ></div>

        <div className={ styles.subtitle }>{ gridItemData.subtitle }</div>
        <div className={ styles.title }>{ gridItemData.title }</div>
    </div>
}

MovieGridItem.propTypes = {
    gridItemData: PropTypes.objectOf(movieGridItemType).isRequired
}

export default MovieGridItem
