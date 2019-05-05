import React from 'react';

const SidebarItem = ({title, active}) => {
    return (
        <div className={`sidebar-item ${ active ? 'active' : ''}`}>
            <span className="title">{ title }</span>
        </div>
    )
};

export default SidebarItem
