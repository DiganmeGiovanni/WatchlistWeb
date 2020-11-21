import React from 'react'
import TrailerPlayer from './TrailerPlayer'

export default {
    component: TrailerPlayer,
    title: 'Trailer player'
}

export const Interstellar = () => <TrailerPlayer
    title='Interstellar'
/>

export const MagnificentSeven = () => <TrailerPlayer
    title='Magnificent seven'
/>

export const TheGoodfather = () => <TrailerPlayer
    title='The Goodfather'
/>

export const TheShawshankRedemption = () => <TrailerPlayer
    title='The Shawshank Redemption'
/>
