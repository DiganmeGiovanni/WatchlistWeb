import React from 'react'
import { useHistory, useParams, useLocation } from 'react-router-dom'

import { makeMoviePreviewRoute } from '../routes/RouteManager'

import TrailerPlayer from '../components/trailerPlayer/TrailerPlayer'

const RoutableTrailerPlayer = () => {
    const history = useHistory()
    const params = useParams()
    const queryParams = new URLSearchParams(useLocation().search)
    
    const tmdbId = parseInt(params.tmdbId)
    const title = queryParams.get('title')

    return <TrailerPlayer
        tmdbId={ tmdbId }
        title={ title }
        onBackClicked={ () => {
            if (history.length > 2) {
                history.goBack()
            } else {
                history.replace(makeMoviePreviewRoute(tmdbId))
            }
        }}
    />
}

export default RoutableTrailerPlayer
