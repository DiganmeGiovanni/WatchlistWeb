import React from 'react'

import MovieGridItem from './movieGridItem/MovieGridItem'
import styles from './MovieGrid.module.scss'

const MovieGrid = ({ movieGridItemsData, onSelect }) => {

    return <div className={ styles.movieGrid }>
        { movieGridItemsData.map((gridItemData) => <MovieGridItem
            key={`movie-grid-item-${ gridItemData.tmdb_id }`}
            gridItemData={ gridItemData }
            onSelect={ onSelect }
        />) }
    </div>
}

export default MovieGrid
