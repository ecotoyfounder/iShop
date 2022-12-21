import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const BurgerButton = ({link, src}) => {
    return (
        <NavLink to={link}>
            <img src={src} className="w-10"/>
        </NavLink>
    );
};

BurgerButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default BurgerButton;