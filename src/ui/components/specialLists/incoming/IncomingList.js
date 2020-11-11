import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import moment from 'moment'

import tmdbClient from '../../../../api_clients/TmdbClient'

import MovieGrid from '../../common/movieGrid/MovieGrid'
import Header from '../../common/header/Header'
import Loading from '../../common/Loading'


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
            : <Loading text='Searching for upcoming movies'/> }
    </div>
}

export default IncomingList
