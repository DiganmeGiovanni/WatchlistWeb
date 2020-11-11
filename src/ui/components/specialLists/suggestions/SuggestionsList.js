import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import tmdbClient from '../../../../api_clients/TmdbClient'
import { makeMoviePreviewRoute } from '../../../routes/RouteManager'

import MovieGrid from '../../common/movieGrid/MovieGrid'
import Header from '../../common/header/Header'
import Loading from '../../common/Loading'


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

    const makeSuggestions = () => {
        const movieGridItemsData = suggestions.map((movie) => {
            const posterUrl = tmdbClient.getPosterUrl(movie.poster_path)
            const releaseYear = movie.release_date.split('-')[0]

            return {
                tmdb_id: movie.tmdb_id,
                poster_url: posterUrl,
                title: movie.title,
                subtitle: releaseYear
            }
        })

        return <MovieGrid
            movieGridItemsData={ movieGridItemsData }
            onSelect={ (tmdbId) => {
                history.push(makeMoviePreviewRoute(tmdbId))
            }}
        />
    }

    return <div className="container-fluid p-3 p-lg-4">
        <Header title='Sugerencias'/>

        { suggestions
            ? makeSuggestions()
            : <Loading text='Searching for suggestions'/> }
    </div>
}

export default SuggestionsList
