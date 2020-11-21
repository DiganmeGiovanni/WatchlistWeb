import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import Header from '../components/common/header/Header'

const HeaderWBackRoute = ({ title, titleJSX, backPath, children }) => {
    const history = useHistory()

    return <Header
        title={ title },
        titleJSX={ titleJSX }
        children={ children }
        onBackClicked={ () => {
            history.push(backPath)
        }}
    />
}

HeaderWBackRoute.propTypes = {
    title: PropTypes.string,
    titleJSX: PropTypes.object,
    backPath: PropTypes.string,
}

export default HeaderWBackRoute
