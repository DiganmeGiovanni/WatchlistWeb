import React from 'react'
import PropTypes from 'prop-types'

import styles from './Header.module.scss'

const ToolbarBtn = ({ classes, onClick }) => {
    return <span
        className={`${ classes ? classes : '' } ${ styles.toolbarBtn }`}
        onClick={ () => onClick() }
    />
}

ToolbarBtn.propTypes = {
    classes: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default ToolbarBtn
