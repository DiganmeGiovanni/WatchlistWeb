import React from 'react'
import MovieGrid from './MovieGrid'

export default {
    component: MovieGrid,
    title: 'Common/Movie grid'
}

const movieGridItemList = [
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie with a very very very very long title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some very very very very very very long subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    },
    {
        poster_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Movie title",
        subtitle: "Some subtitle"
    }
]

export const Default = () => <MovieGrid
    movieGridItemsData={ movieGridItemList }
/>
