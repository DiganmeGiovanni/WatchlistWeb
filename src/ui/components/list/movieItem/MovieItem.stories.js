import React from 'react'
import MovieItem from './MovieItem'

export default {
    component: MovieItem,
    title: 'Movie item'
}

export const Default = () => <MovieItem
    title='Fight Club'
    releaseYear={ 1999 }
    genres={ ['Drama'] }
    posterUrl='https://image.tmdb.org/t/p/original//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
/>
