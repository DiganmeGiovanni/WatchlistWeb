import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import tmdbClient from '../../../../api_clients/TmdbClient'

import MovieDetails from '../../movieDetails/MovieDetails'
import styles from './MoviePreview.module.scss'
import buttonStyles from '../../../styles/buttons.module.scss'

const MoviePreview = ({ tmdbId, onPlayTrailerClicked, onAddToListClicked }) => {
    const [isFetching, setFetching] = useState(true)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        setFetching(true)
        setMovie(null)

        tmdbClient.getMovieDetails(
            tmdbId,
            movie => {
                setFetching(false)
                setMovie(movie)
            },
            () => {
                /* TODO: Show error screen */
                setFetching(false)
            }
        )
    }, [tmdbId])
    
    if (!movie) {
        if (isFetching) {
            return <div className={ styles.moviePreview }>
                <div className='row py-5'>
                    <div className='col pt-3 text-center'>
                        <span className='fas fa-spinner fa-spin fa-3x'/>
                        <h4 className='mt-3'>Espera un momento por favor</h4>
                    </div>
                </div>
            </div>
        }

        else {
            return <div className={ styles.moviePreview }>
                <div className='row py-5'>
                    <div className='col pt-3 text-center'>
                        <h3>:(</h3>
                        <h4 className='mt-3'>
                            Hubó un error al mostrar la información
                        </h4>
                    </div>
                </div>
            </div>
        }
    }

    return <MovieDetails movie={ movie }>
        <div className="row">
            <div className="col px-0 px-sm-2 text-right">
                <button
                    className={`btn btn-primary ${ buttonStyles.btnPrimary }`}
                    onClick={ () => { onPlayTrailerClicked(movie.title) }}
                >
                    <span className="fas fa-play"></span>
                    <span>&nbsp;&nbsp;&nbsp;</span>

                    <span>Ver trailer</span>
                </button>
            </div>

            <div className="col text-left">
                <button
                    className={`btn btn-primary ${ buttonStyles.btnPrimary }`}
                    onClick={ () => { onAddToListClicked() }}
                >
                    <span className="fas fa-plus"></span>
                    <span>&nbsp;&nbsp;&nbsp;</span>

                    <span>Agregar a ... </span>
                </button>
            </div>
        </div>
    </MovieDetails>
}

MoviePreview.propTypes = {
    tmdbId: PropTypes.number.isRequired,
    onPlayTrailerClicked: PropTypes.func.isRequired,
    onAddToListClicked: PropTypes.func.isRequired
}

export default MoviePreview
