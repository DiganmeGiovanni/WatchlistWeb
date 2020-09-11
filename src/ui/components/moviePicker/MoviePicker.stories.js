import React from 'react'
import MoviePicker from './MoviePicker'

export default {
    component: MoviePicker,
    title: 'Movie Picker'
}

export const Default = () => <MoviePicker
    title='Agregar a: Favorites'
    onMovieSelected={ () => {
        console.log('Movie selected')
    }}
    onBackClicked={ () => {
        console.log('On back clicked')
    }}
/>
