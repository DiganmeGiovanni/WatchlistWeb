import React from 'react'
import MoviePreview from './MoviePreview'

export default {
    component: MoviePreview,
    title: 'Movie details/Preview'
}

export const Interstellar = () => <MoviePreview
    tmdbId={ 157336 }
    targetListName='Favorites'
/>

export const Magnificent7 = () => <MoviePreview
    tmdbId={ 333484 }
    targetListName='Western'
/>

export const FantasticBeasts = () => <MoviePreview
    tmdbId={ 259316 }
    targetListName='Favorites'
/>

export const Titanic = () => <MoviePreview
    tmdbId={ 597 }
    targetListName='Classics'
/>

export const SixtySeconds = () => <MoviePreview
    tmdbId={ 9679 }
    targetListName='Classics'
/>

export const TheItalianJob = () => <MoviePreview
    tmdbId={ 9654 }
    targetListName='Classics'
/>

export const Oceans8 = () => <MoviePreview
    tmdbId={ 402900 }
    targetListName='Classics'
/>
