import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import CastCard from './castCard/CastCard'

import { movieType } from '../../types/WatchlistTypes'
import tmdbClient, { imageSizes } from '../../../api_clients/TmdbClient'
import styles from './MovieDetails.module.scss'

const MovieDetails = ({ children, movie }) => {
    const [showAllCast, setShowAllCast] = useState(false)

    let backdropUrl = tmdbClient.getBackdropUrlForSize(
        movie.backdrop_path,
        imageSizes.backdrop.w780
    )

    const runtimeHours = Math.floor(movie.runtime / 60)
    let runtimeMins = movie.runtime - runtimeHours * 60
    if (runtimeMins < 10) runtimeMins = '0' + runtimeMins

    const runtimeStr = `${ runtimeHours }h ${ runtimeMins }m`

    const releaseDate = moment(movie.release_date).format('ll')
    const genres = movie.genres.map(genre => genre.name).join(' | ')

    const director = movie.credits.crew
        .filter(crewMember => crewMember.job === 'Director')
        .map(crewMember => crewMember.name)
        .join(', ')

    const makeCastJsx = () => {
        let cast = movie.credits
            .cast
            .filter(castMember => castMember.profile_path)
        if (!showAllCast) {
            cast = cast.slice(0, 5)
        }

        return cast.map(castMember => {
            const pictureUrl = tmdbClient.getPictureUrlForSize(
                castMember.profile_path,
                imageSizes.profile.w185
            )

            return <CastCard
                key={ `cast-card-${ castMember.id }` }
                name={ castMember.name }
                character={ castMember.character }
                pictureUrl={ pictureUrl }
            />
        })
    }
    

    return <div
        className={ styles.movieDetails }
        style={{ backgroundImage: `url(${ backdropUrl })` }}
    >
        <div className={ styles.movieDetailsWrapper }>
            <div className="container pt-3 pb-5">
                <div className="row">
                    <div className="col-12 text-center pt-3 pb-5">
                        <h1 className={ styles.header }>{ movie.title }</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <p>
                            <span className={ styles.movieAttrOnlyValue }>
                                { runtimeStr }
                            </span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>&nbsp;&nbsp;</span>

                            <span className={ styles.movieAttrOnlyValue }>
                                { releaseDate }
                            </span>
                            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>&nbsp;&nbsp;</span>

                            <span className={ styles.movieAttrOnlyValue }>
                                { movie.rating }
                                &nbsp;
                                <span className="fas fa-star"></span>
                            </span>
                        </p>
                        <p>
                            <span className={ styles.movieAttrOnlyValue }>
                                { genres }
                            </span>
                        </p>
                    </div>

                    <div className="col-6">
                        <p>
                            <span className={ styles.movieAttrLabel }>
                                Director
                            </span>
                            <br/>
                            <span className={ styles.movieAttrValue }>{ director }</span>
                        </p>
                    </div>
                </div>

                <div className="row">
                    <div className={`${ showAllCast ? 'col-12' : 'col-6'}`}>
                        <span className={ styles.movieAttrLabel}>
                            Sinopsis
                        </span>
                        <p className={`
                            pt-2
                            ${ styles.movieAttrValue }
                        `}>
                            { movie.synopsis }
                        </p>
                    </div>

                    <div className={`${ showAllCast ? 'col-12' : 'col-6'}`}>
                        <span className={ styles.movieAttrLabel }>Elenco</span>
                        <div className={`
                            pt-2
                            ${ styles.castContainer }
                        `}>
                            { makeCastJsx() }
                        </div>
                        <span
                            className={ styles.viewAllCast }
                            onClick={ () => setShowAllCast(!showAllCast)}
                        >
                            { showAllCast ? 'Ver menos' : 'Ver a todo el elenco'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

MovieDetails.propTypes = {
    movie: movieType
}

export default MovieDetails
