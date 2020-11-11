import React from 'react'

import Greet from './Greet'

export default {
    component: Greet,
    title: 'Sidebar/Greet',

    excludeStories: /.*Data$/
}

export const Default = () => <Greet name='Giovanni'/>
