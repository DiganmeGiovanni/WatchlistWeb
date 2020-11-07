import React from 'react'
import Header from './Header'
import ToolbarBtn from './ToolbarBtn'
import HeaderWSearch from '../headerWSearch/HeaderWSearch'

export default {
    component: Header,
    title: 'Header bar'
}

export const Default = () => <Header title='Some awesome title'/>

export const WithActions = () => <Header title='Some awesome title'>
    <ToolbarBtn
        classes='fas fa-share-alt'
        onClick={ () => console.log('Clicked') } />
</Header>

export const WithSearchBar = () => <HeaderWSearch
    title='Header with search'
    filter='Hello'
    onFilterChange={ nFilter => { console.log(nFilter) }}
>
    <ToolbarBtn
        classes='fas fa-share-alt'
        onClick={ () => console.log('Clicked') } />
</HeaderWSearch>
