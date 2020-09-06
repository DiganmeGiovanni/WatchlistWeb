import React from 'react';
import PropTypes from 'prop-types'
import styles from './MovieItem.module.scss'

const MovieItem = ({ title, releaseYear, genres, posterUrl }) => {
    let genresTxt = genres.join(', ')

    return (
        <div className='col-6 col-sm-4 col-md-4 col-xl-3 pb-5'>
            <div className={ styles.movieItem }>
                <div
                    className={ styles.poster }
                    style={{ backgroundImage: `url(${ posterUrl })` }}
                ></div>
                <div className={ styles.subtitle }>
                    <span>{ releaseYear }</span>
                    <span className='d-none d-md-inline'> / { genresTxt }</span>
                </div>
                <div className={ styles.title }>{ title }</div>
            </div>
        </div>
    )
};

MovieItem.propTypes = {
    title: PropTypes.string.isRequired,
    releaseYear: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    posterUrl: PropTypes.string.isRequired
};

export default MovieItem;
