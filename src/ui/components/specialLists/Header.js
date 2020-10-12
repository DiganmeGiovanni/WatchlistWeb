import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return <div className="row">
        <div className="col">
            <h1>{ title }</h1>
        </div>
    </div>
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
