import React, { useState } from 'react'
import moment from 'moment'

import CastCard from './castCard/CastCard'
import Header from '../common/header/Header'

import styles from './MovieDetails.module.scss'

import { movieType } from '../../types/WatchlistTypes'
import tmdbClient, { imageSizes } from '../../../api_clients/TmdbClient'

const MovieDetails = ({ children, movie }) => {
    const [showAllCast, setShowAllCast] = useState(false)

    let backdropUrl = tmdbClient.getBackdropUrl(movie.backdrop_path)

    const runtimeHours = Math.floor(movie.runtime / 60)
    let runtimeMins = movie.runtime - runtimeHours * 60
    if (runtimeMins < 10) runtimeMins = '0' + runtimeMins

    const runtimeStr = `${ runtimeHours }h ${ runtimeMins }m`

    const releaseDate = moment(movie.release_date).format('ll')
    const genres = movie.genres.map(genre => genre.name).join(' | ')

    const director = movie
        .crew
        .filter(crewMember => crewMember.job === 'Director')
        .map(crewMember => crewMember.name)
        .join(', ')

    const makeCastJsx = () => {
        let cast = movie
            .cast
            .filter(castMember => castMember.picture_url)
        if (!showAllCast) {
            cast = cast.slice(0, 5)
        }

        return cast.map(castMember => {
            const pictureUrl = tmdbClient.getPictureUrlForSize(
                castMember.picture_url,
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
            <div className="container px-4 pt-4 pb-5">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* <Header title={ movie.title }/> */}
                        <h1 className={ styles.header }>{ movie.title }</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pt-3 pb-5">
                        { children }
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 col-sm-3">
                        <span className={ styles.movieAttrLabel }>
                            Director
                        </span>
                        <br/>
                        <span className={ styles.movieAttrValue }>
                            { director }
                        </span>
                    </div>

                    <div className="col-6 col-sm-3">
                        <span className={ styles.movieAttrLabel }>
                            Estreno
                        </span>
                        <br/>
                        <span className={ styles.movieAttrValue }>
                            { releaseDate }
                        </span>
                    </div>

                    <div className="col-6 col-sm-3 pt-4 pt-sm-0">
                        <span className={ styles.movieAttrLabel }>
                            Calificación
                        </span>
                        <br/>
                        <span className={ styles.movieAttrValue }>
                            { movie.rating }
                            &nbsp;
                            <span className="fas fa-star"></span>
                        </span>
                    </div>

                    <div className="col-6 col-sm-3 pt-4 pt-sm-0">
                        <span className={ styles.movieAttrLabel }>
                            Duración
                        </span>
                        <br/>
                        <span className={ styles.movieAttrValue }>
                            { runtimeStr }
                        </span>
                    </div>

                    <div className="col-12 pt-5">
                        <span className={ styles.movieAttrOnlyValue }>
                            { genres }
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className='col-12 pt-5'>
                        <span className={ styles.movieAttrLabel }>
                            Sinopsis
                        </span>
                        <p className={`
                            pt-2
                            ${ styles.movieAttrValue }
                        `}>
                            { movie.synopsis }
                        </p>
                    </div>

                    <div className='col-12 pt-5'>
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
