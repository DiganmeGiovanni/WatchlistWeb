import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import tmdbClient from '../../../api_clients/TmdbClient'
import MovieCard from './movieCard/MovieCard'
import styles from './MoviePicker.module.scss'

const MoviePicker = ({ title, onMovieSelected, onBackClicked }) => {
    const [searchResults, setSearchResults] = useState([])
    const [isSearching, setSearching] = useState(false)
    const [query, setQuery] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const onQueryChange = (newQuery) => {
        setQuery(newQuery)

        if (newQuery === '') {
            setSearchResults([])
        } else {
            setSearching(true)

            tmdbClient.searchMovie(
                newQuery,
                results => {
                    setSearching(false)
                    setSearchResults(results)
                },
                () => { /* Show error message */ }
            )
        }
    }

    return <div className={ styles.moviePicker }>
        <div>
            <span
                className={`
                    fas
                    fa-chevron-left
                    ${ styles.backBtn }
                `}
                onClick={ () => {
                    console.log('Back clicked')
                }}
            />

            <h1 className={ styles.title }>
                &nbsp;&nbsp;
                { title }
            </h1>
        </div>

        <div className={ styles.searchBarContainer }>
            <div className={ styles.searchBar }>
                <span className={`
                    fas
                    fa-search
                    ${ styles.searchBarIcon }
                `}/>

                <input
                    type="text"
                    className={ styles.inpSearch }
                    placeholder='Comienza a escribir para buscar'
                    value={ query }
                    onChange={ e => { onQueryChange(e.target.value) }}
                    ref={ inputRef }
                />

                {query && <span
                    className={`
                        fas
                        fa-times
                        ${ styles.clearBtn }
                    `}
                    onClick={ () => onQueryChange('') }
                />}
            </div>
            
        </div>

        <div className={ styles.searchResultsContainer }>
            {searchResults.map(result => <MovieCard
                key={`movie-${ result.tmdb_id }`}
                movieSearchResult={ result }
            />)}
        </div>
    </div>
}

MoviePicker.propTypes = {
    title: PropTypes.string.isRequired,
    onMovieSelected: PropTypes.func.isRequired,
    onBackClicked: PropTypes.func.isRequired,
}

export default MoviePicker
