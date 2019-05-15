import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from "prop-types";

const SidebarItem = ({ id, title, active }) => {
    return (
        <Route render={({ history }) => (
            <div className={`sidebar-item ${ active ? 'active' : ''}`}
                 onClick={ () => {
                     if (id) {
                         history.push(`/list/${ id }`)
                     }
                 }}
            >
                <span className="title">{ title }</span>
            </div>
        )} />
    )
};

SidebarItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool
};

export default SidebarItem
