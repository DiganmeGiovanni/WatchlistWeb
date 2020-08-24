import React from 'react'
import { action } from '@storybook/addon-actions'

import SidebarItem from './SidebarItem'

export default {
    component: SidebarItem,
    title: 'Sidebar item',

    excludeStories: /.*Data$/
}

export const actionsData = {
    onClick: action('onClick')
}

export const Default = () => <SidebarItem
    title='Western'
    active={ false }
    { ...actionsData }
/>

export const Selected = () => <SidebarItem
    title='Western'
    active={ true }
    { ...actionsData }
/>
