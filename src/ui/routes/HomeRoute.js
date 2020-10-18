import React from 'react'
import { Redirect } from 'react-router-dom'

import authService from '../../auth/AuthService'

const HomeRoute = () => {
    if (authService.activeSession()) {
        return <h1>Default list</h1>
    } else {
        return <Redirect to={{ pathname: '/suggestions' }} />
    }
}

export default HomeRoute
