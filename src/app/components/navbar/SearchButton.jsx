import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const SearchButton = ({link, src}) => {
    return (
        <NavLink to={link}>
            <img src={src} className="w-10 mr-10"/>
        </NavLink>
    );
};

SearchButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default SearchButton;