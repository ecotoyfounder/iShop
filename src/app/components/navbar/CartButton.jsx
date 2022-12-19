import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";

const CartButton = ({link, src}) => {
    return (
        <NavLink to={link}>
            <img src={src} className="w-10 mr-10"/>
        </NavLink>
    );
};

CartButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default CartButton;