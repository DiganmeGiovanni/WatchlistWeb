import React from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderBar.module.scss'

import Toolbar from './Toolbar'

const HeaderBar = ({ title, filter, onFilterChange }) => {
    return (
        <div className={ styles.headerBar }>
            <div className='row'>
                <div className='col-8 col-md-6'>
                    <h1 className={ styles.title }>{ title }</h1>
                </div>
                <div className='col-4 col-md-6 text-right'>
                    <Toolbar
                        filter={ filter }
                        onFilterChange={ onFilterChange }
                    />
                </div>
            </div>
        </div>
    );
};

HeaderBar.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default HeaderBar;
