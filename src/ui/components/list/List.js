import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { hasMovieType } from '../../types/WatchlistTypes'
import FloatingButton from './floatingButton/FloatingButton'
import HeaderWSearch from '../common/headerWSearch/HeaderWSearch'
import Loading from '../common/Loading'
import ToolbarBtn from '../common/header/ToolbarBtn'
import MovieGrid from '../common/movieGrid/MovieGrid'

import tmdbClient from '../../../api_clients/TmdbClient'


const List = ({ title, isFetching, hasMovies }) => {
    const [filter, setFilter] = useState('')

    const makeContent = () => {
        if (isFetching) {
            return <Loading text='Retrieving list content'/>
        }

        if (hasMovies.length === 0) {
            return <div className="row">
                <div className="col pt-4 text-center">
                    <span className="fas fa-5x fa-tape"/>
                    <p className="fs-big mt-3">
                        Don't let popcorns get bored <br/>
                        Add some movies to your list:
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

        if (filter) {
            hasMovies = hasMovies
                .filter(hasMovie => hasMovie
                    .movie
                    .title
                    .toUpperCase()
                    .includes(filter.toUpperCase())
                )
        }

        if (hasMovies.length === 0) {
            return <div className="row">
                <span className="fas fa-5x fa-tape"/>
                <p className="fs-big mt-3">
                    No results for '{ filter }'
                </p>
                <br/>
            </div>
        }
    
        // Map movies into right data structure for <MovieGrid>
        const movieGridItemsData = hasMovies.map(hasMovie => {
            const posterUrl = tmdbClient.getPosterUrl(hasMovie.movie.poster_path)
            
            let releaseDate = ''
            if (hasMovie.movie.release_date) {
                releaseDate = moment(hasMovie.movie.release_date).format(
                    'MMM YYYY'
                )
            }
    
            return {
                tmdb_id: hasMovie.movie.tmdb_id,
                poster_url: posterUrl,
                title: hasMovie.movie.title,
                subtitle: releaseDate
            }
        })

        return <MovieGrid
            movieGridItemsData={ movieGridItemsData }
            onSelect={ tmdbId => {
                console.log(`${ tmdbId } has been selected`)
            }}
        />
    }

    return <div className="container-fluid p-3 p-lg-4">
        <HeaderWSearch
            title={ title }
            filter={ filter }
            onFilterChange={ filter => setFilter(filter) }
        >
            <ToolbarBtn
                classes='fas fa-share-alt'
                onClick={ () => { console.log('Share clicked') }}
            />
            <ToolbarBtn
                classes='fas fa-ellipsis-v'
                onClick={ () => { console.log('Options clicked') }}
            />
        </HeaderWSearch>

        { makeContent() }
        
        <FloatingButton
            onClick={ () => {
                console.log('Plus clicked')
            }}
        />
    </div>
}

List.propTypes = {
    title: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasMovies: PropTypes.arrayOf(hasMovieType)
}

export default List;
