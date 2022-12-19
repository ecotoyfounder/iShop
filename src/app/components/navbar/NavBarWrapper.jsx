import React from "react";
import PropTypes from "prop-types";

const NavBarWrapper = ({children}) => {
    return (
        <div
            className="sticky top-0 z-40 backdrop-blur flex justify-between transition-colors duration-500c">
            {children}
        </div>
    );
};

NavBarWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
export default NavBarWrapper;
