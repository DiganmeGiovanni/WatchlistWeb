import React from 'react'
import PropTypes from 'prop-types'

import MovieItem from './movieItem/MovieItem'
import { hasMovieType } from '../../types/WatchlistTypes';

import tmdbClient from '../../../api_clients/TmdbClient'

const ListContent = ({ isFetching, hasMovies }) => {
    if (isFetching) {
        return <div className="row">
            <div className="col-lg-4 offset-lg-4 pt-5 text-center">
                <span className="fas fa-3x fa-spin fa-spinner"/>
                <p className="fs-big mt-3">
                    Obteniendo contenido de la lista
                </p>
                <br/>
            </div>
        </div>
    }

    if (hasMovies.length === 0) {
        return <div className="row">
            <div className="col-lg-4 offset-lg-4 pt-5 text-center">
                <span className="fas fa-5x fa-tape"/>
                <p className="fs-big mt-3">
                    Agrega la primer pelicula a tu lista
                    y no dejes que las palomitas se aburran
                </p>
                <br/>

                {/* <button className="btn btn-primary"
                        onClick={ this.onAddClicked }
                >
                    Agregar pelicula
                </button> */}
            </div>
        </div>
    }

    let moviesJsx = hasMovies.map((hasMovie, idx) => {
        const releaseYear = hasMovie.movie.release_date.split('-')[0]
        const genres = hasMovie.movie.genres.map(genre => genre.name)
        const posterUrl = tmdbClient.getPosterUrl(hasMovie.movie.poster_path)

        return <MovieItem
            key={`movie-${ idx }`}
            title={ hasMovie.movie.title }
            releaseYear={ parseInt(releaseYear) }
            genres={ genres }
            posterUrl={ posterUrl }
        />
    })

    return <div className="row pt-4">
        { moviesJsx}
    </div>
}

ListContent.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    hasMovies: PropTypes.arrayOf(hasMovieType)
}

export default ListContent
