import React from 'react';
import PropTypes from 'prop-types';

import styles from './FloatingButton.module.scss'

const FloatingButton = ({ onClick }) => {
    return (
        <div
            onClick={ () => onClick() }
            className={ styles.floatingButton }>
            <span className="fas fa-plus"></span>
        </div>
    )
}

FloatingButton.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default FloatingButton