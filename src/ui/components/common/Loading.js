import React from 'react'
import PropTypes from 'prop-types'

const Loading = ({ text }) => {
    return <div className="row text-center p-5">
        <div className="col">
            <span className="fas fa-spinner fa-spin fa-2x"/>
            { text && <h4 className="pt-3">{ text }</h4> }
        </div>
    </div>
}

Loading.propTypes = {
    text: PropTypes.string
}

export default Loading
