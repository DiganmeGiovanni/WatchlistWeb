import React from 'react';
import PropTypes from "prop-types";

const SidebarItem = ({ id, title, active, selectList }) => {
    const onListClicked = () => {
        if (selectList && id) {
            selectList(id);
        }
    };

    return (
        <div className={`sidebar-item ${ active ? 'active' : ''}`}
             onClick={ onListClicked  }
        >
            <span className="title">{ title }</span>
        </div>
    )
};

SidebarItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool,

    selectList: PropTypes.func
};

export default SidebarItem
