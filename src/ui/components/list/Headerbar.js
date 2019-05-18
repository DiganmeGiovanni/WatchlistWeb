import React from "react";
import PropTypes from "prop-types";

const Headerbar = ({ title, filter, onFilterChange }) => {
    return (
        <div className="headerbar">
            <div className="row">
                <div className="col-8 col-md-6">
                    <h1 className="title">{ title }</h1>
                </div>
                <div className="col-4 col-md-6 text-right">
                    <input
                        type="text"
                        className="inp-search"
                        onChange={ onFilterChange }
                        value={ filter }
                    />
                </div>
            </div>
        </div>
    );
};

Headerbar.propTypes = {
    title: PropTypes.string.isRequired,
    filter: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired
};

export default Headerbar;
