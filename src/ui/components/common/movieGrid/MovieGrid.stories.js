import React from 'react'
import MovieGrid from './MovieGrid'

export default {
    component: MovieGrid,
    title: 'MovieGrid'
}

const movieGridItemList = [
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello asdf asdf asdf asdf adf",
        subtitle: "Worldadfadf aadfadsf asdfasdf asdfasdf"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    },
    {
        image_url: 'https://image.tmdb.org/t/p/w342/elZ6JCzSEvFOq4gNjNeZsnRFsvj.jpg',
        title: "Hello",
        subtitle: "World"
    }
]

export const Default = () => <MovieGrid
    movieGridItemsData={ movieGridItemList }
/>
