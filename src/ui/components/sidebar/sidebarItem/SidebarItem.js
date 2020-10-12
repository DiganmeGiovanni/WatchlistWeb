import React from 'react';
import PropTypes from "prop-types";
import styles from './SidebarItem.module.scss';

const SidebarItem = ({ title, active=false, onClick }) => {
    const className = active
        ? styles.sidebarItemActive
        : styles.sidebarItem;

    return (
        <div className={ className }
             onClick={ onClick  }
        >
            <span className="title">{ title }</span>
        </div>
    )
};

SidebarItem.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,

    onClick: PropTypes.func.isRequired
};

export default SidebarItem
