import React from 'react'
import MoviePicker from './MoviePicker'

export default {
    component: MoviePicker,
    title: 'Movie Picker/Picker'
}

export const Default = () => <MoviePicker
    title='Agregar a: Favoritos'
    onMovieSelected={ () => {
        console.log('Movie selected')
    }}
    onBackClicked={ () => {
        console.log('On back clicked')
    }}
/>
