import React from 'react'
import MovieCard from './MovieCard'

export default {
    component: MovieCard,
    title: 'Movie Card'
}

const movieSearchResult = {
    "tmdb_id": 98,
    "title": "Gladiator",
    "rating": 8.2,
    "release_date": "2000-05-01",
    "synopsis": "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    "poster_path": "/pRn3TJHbAqCAO6U8Dw5DayVUuX3.jpg",
    "backdrop_path": "/aZtwH3RQ0L8jbInxr7OSc9tlGMJ.jpg"
}

export const Default = () => <MovieCard
    movieSearchResult={ movieSearchResult }
/>
