import React from 'react'

import HeaderBar from './HeaderBar'

export default {
    component: HeaderBar,
    title: 'List Header Bar'
}

export const Default = () => <HeaderBar
    title='Western'
    filter='The magnificent se'
    onFilterChange={ () => {} }
/>
