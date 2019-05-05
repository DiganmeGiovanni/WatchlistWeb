import React from "react";
import PropTypes from "prop-types";

const Headerbar = ({ title }) => {
    return (
        <div className="headerbar">
            <h1 className="title">{ title }</h1>
        </div>
    );
};

Headerbar.propTypes = {
    title: PropTypes.string.isRequired
};

export default Headerbar;
