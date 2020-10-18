import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import MovieItem from '../../list/movieItem/MovieItem'
import Header from '../Header'

import tmdbClient from '../../../../api_clients/TmdbClient'

const IncomingList = () => {
    const [incoming, setIncoming] = useState(null)
    const history = useHistory()

    useEffect(() => {
        if (!incoming) {
            tmdbClient.searchIncomingMovies(
                results => setIncoming(results),
                () => { console.error('Error ocurred') }
            )
        }
    })

    // TODO: Extract into utilities component (Also used in SuggestionsList)
    const makeLoading = () => <div className="row text-center p-5">
        <div className="col">
            <span className='fas fa-spinner fa-spin fa-2x'></span>
            <h4 className='pt-3'>Searching for suggestions</h4>
        </div>
    </div>

    const makeIncomingElements = () => <div className="row pt-4">
        { incoming.map((movie, idx) => {
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
        <Header title='Próximos estrenos'/>

        { incoming
            ? makeIncomingElements()
            : makeLoading() }
    </div>
}

export default IncomingList
