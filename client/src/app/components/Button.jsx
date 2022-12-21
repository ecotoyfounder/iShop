import React from "react";
import PropTypes from "prop-types";


const Button = ({label, children, onClick}) => {
    return (
        <button
            type="submit"
            className="btn-primary m-auto mb-6 mt-10 block px-4"
            onClick={onClick}
        >
            {label || children || "button"}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;