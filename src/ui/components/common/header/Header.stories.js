import React from 'react'
import Header from './Header'
import ToolbarBtn from './ToolbarBtn'

export default {
    component: Header,
    title: 'Common/Header bar'
}

export const Simple = () => <Header title='Simple header'/>

export const WithBackBtn = () => <Header
    title='Header with back button'
    onBackClicked={ () => {
        console.log('Back has been clicked')
    }}
/>

export const WithActions = () => <Header title='Header with actions'>
    <ToolbarBtn
        classes='fas fa-share-alt'
        onClick={ () => console.log('Clicked') } />
</Header>
