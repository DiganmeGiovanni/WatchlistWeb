import React from 'react'
import PropTypes from 'prop-types'

import styles from './CastCard.module.scss'

const CastCard = ({ name, character, pictureUrl }) => {

    return <div className={ styles.castCard }>
        <div
            className={ styles.profileImg }
            style={{ backgroundImage: `url(${ pictureUrl })` }}
        />

        <div className={ styles.castInfo }>
            <b>{ name }</b>
            <br/>
            <span>{ character }</span>
        </div>

    </div>
}

CastCard.propTypes = {
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    pictureUrl: PropTypes.string,
}

export default CastCard
