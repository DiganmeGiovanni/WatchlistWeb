import React from 'react'

import ToolbarBtn from '../header/ToolbarBtn'
import HeaderWSearch from './HeaderWSearch'

export default {
    component: HeaderWSearch,
    title: 'Common/Header bar with search'
}

export const SimpleSearch = () => <HeaderWSearch
    title='Header with search'
    filter='Hello'
    onFilterChange={ nFilter => { console.log(nFilter) }}
/>

export const WithExtraActions = () => <HeaderWSearch
    title='Header with search input and actions'
    filter='Hello'
    onFilterChange={ nFilter => { console.log(nFilter) }}
>
    <ToolbarBtn
        classes='fas fa-share-alt'
        onClick={ () => console.log('Clicked') }
    />
    <ToolbarBtn
        classes='fas fa-ellipsis-v'
        onClick={ () => console.log('Clicked') }
    />
</HeaderWSearch>
