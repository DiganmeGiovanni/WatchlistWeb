import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import {
    makePlayerTrailerRoute,
    routeSuggestions
} from '../routes/RouteManager'

import MoviePreview from '../components/moviePicker/moviePreview/MoviePreview'

const RoutableMoviePreview = () => {
    const history = useHistory()
    const params = useParams()
    const tmdbId = parseInt(params.tmdbId)

    return <MoviePreview
        tmdbId={ tmdbId }
        onBackClicked={ () => {
            if (history.length > 2) {
                history.goBack()
            } else {
                history.replace(routeSuggestions)
            }
        }}
        onPlayTrailerClicked={ (title) => {
            history.push(makePlayerTrailerRoute(tmdbId, title))
        }}
    />
}

export default RoutableMoviePreview
