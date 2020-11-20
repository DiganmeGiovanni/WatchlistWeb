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
