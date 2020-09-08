import React from 'react'
import PropTypes from 'prop-types'

import { movieSearchResultType } from '../../../types/WatchlistTypes'
import TmdbClient, { imageSizes } from '.././../../../api_clients/TmdbClient'

import styles from './MovieCard.module.scss'

const MovieCard = ({ movieSearchResult }) => {
    const posterUrl = TmdbClient.getPosterUrlForSize(
        movieSearchResult.poster_path,
        imageSizes.poster.w154
    )
    const releaseYear = movieSearchResult.release_date.split('-')[0]

    return <div className={ styles.movieCard }>
        <div className={ styles.movieCardImageContainer }>
            <img
                className={ styles.movieCardImage }
                src={ posterUrl }
                alt={ movieSearchResult.title }
            />
        </div>
        <div className={ styles.movieCardContent }>
            <h4>{ movieSearchResult.title }</h4>
            <div className="row">
                <div className="col-6">
                    <p>
                        <span className="fas fa-calendar"></span>
                        <span>&nbsp;&nbsp;{ releaseYear }</span>
                    </p>
                </div>
                <div className="col-6">
                    <p>
                        <span className="fas fa-star"></span>
                        <span>&nbsp;&nbsp;{ movieSearchResult.rating }</span>
                    </p>
                </div>
            </div>
            
            <p className={ styles.synopsis }>{ movieSearchResult.synopsis }</p>
        </div>
    </div>
}

MovieCard.propTypes = {
    movieSearchResult: PropTypes
        .objectOf(movieSearchResultType)
        .isRequired,
}

export default MovieCard
