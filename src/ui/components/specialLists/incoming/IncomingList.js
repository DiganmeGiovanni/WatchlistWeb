import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import tmdbClient from '../../../../api_clients/TmdbClient'

import MovieGrid from '../../common/movieGrid/MovieGrid'
import Header from '../../header/Header'


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

    const makeIncomingElements = () => {
        const movieGridItemsData = incoming.map((movie) => {
            const posterUrl = tmdbClient.getPosterUrl(movie.poster_path)
            let releaseDate = ''
            
            if (movie.release_date) {
                releaseDate = moment(movie.release_date)
                        .format('ddd,  MMM Do')
            }

            return {
                tmdb_id: movie.tmdb_id,
                poster_url: posterUrl,
                title: movie.title,
                subtitle: releaseDate
            }
        })

        return <MovieGrid
            movieGridItemsData={ movieGridItemsData }
            onSelect={ tmdbId => {
                history.push(`movie/${ tmdbId }/preview`)
            }}
        />

    }

    return <div className="container-fluid p-3 p-lg-4">
        <Header title='Próximos estrenos'/>

        { incoming
            ? makeIncomingElements()
            : makeLoading() }
    </div>
}

export default IncomingList
