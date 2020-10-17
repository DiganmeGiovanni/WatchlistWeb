import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import MovieItem from '../../list/movieItem/MovieItem'
import Header from '../Header'

import tmdbClient from '../../../../api_clients/TmdbClient'

const SuggestionsList = () => {
    const [suggestions, setSuggestions] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (!suggestions) {
            tmdbClient.searchPopularMovies(
                results => setSuggestions(results),
                () => { console.error('Error ocurred') }
            )
        }
    })

    const makeLoading = () => <div className="row text-center p-5">
        <div className="col">
            <span className='fas fa-spinner fa-spin fa-2x'></span>
            <h4 className='pt-3'>Searching for suggestions</h4>
        </div>
    </div>

    const makeSuggestions = () => <div className="row pt-4">
        { suggestions.map((movie, idx) => {
            const releaseYear = movie.release_date.split('-')[0]
            const posterUrl = tmdbClient.getPosterUrl(movie.poster_path)
            return <MovieItem
                key={`suggestion-${ idx }`}
                title={ movie.title }
                releaseYear={ parseInt(releaseYear) }
                genres={ [] }
                posterUrl={ posterUrl }

                onSelect={ () => {
                    history.push(`movie/${ movie.tmdb_id }/preview`)
                }}
            />
        }) }
    </div>

    return <div className="container-fluid p-3 p-lg-4">
        <Header title='Sugerencias'/>

        { suggestions
            ? makeSuggestions()
            : makeLoading() }
    </div>
}

export default SuggestionsList
