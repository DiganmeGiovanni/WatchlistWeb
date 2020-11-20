import React from 'react'
import TrailerPlayer from './TrailerPlayer'

export default {
    component: TrailerPlayer,
    title: 'Trailer player'
}

export const Interstellar = () => <TrailerPlayer
    tmdbId={ 123 }
    title='Interstellar'
/>

export const MagnificentSeven = () => <TrailerPlayer
    tmdbId={ 123 }
    title='Magnificent seven'
/>

export const TheGoodfather = () => <TrailerPlayer
    tmdbId={ 123 }
    title='The Goodfather'
/>

export const TheShawshankRedemption = () => <TrailerPlayer
    tmdbId={ 123 }
    title='The Shawshank Redemption'
/>
