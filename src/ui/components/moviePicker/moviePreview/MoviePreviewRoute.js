import React from 'react'
import { useParams } from 'react-router-dom'

import MoviePreview from './MoviePreview'

const MoviePreviewRoute = () => {
    const params = useParams()
    const tmdbId = parseInt(params.tmdbId)

    return <MoviePreview tmdbId={ tmdbId } />
}

export default MoviePreviewRoute
