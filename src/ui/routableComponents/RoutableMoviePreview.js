import React from 'react'
import { useParams, useHistory } from 'react-router-dom'

import { makePlayerTrailerRoute } from '../routes/RouteManager'

import MoviePreview from '../components/moviePicker/moviePreview/MoviePreview'

const RoutableMoviePreview = () => {
    const history = useHistory()
    const params = useParams()
    const tmdbId = parseInt(params.tmdbId)

    return <MoviePreview
        tmdbId={ tmdbId }
        onPlayTrailerClicked={ (title) => {
            history.push(makePlayerTrailerRoute(tmdbId, title))
        }}
    />
}

export default RoutableMoviePreview
