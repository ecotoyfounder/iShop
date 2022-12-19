import React from "react";
import PropTypes from "prop-types";

const Card = ({children}) => {
    return (
        <div
            className="w-full">
            {children}
        </div>
    );
};
const CardTitle = ({children, label}) => {
    return (
        <h1 className="text-slate-800 text-primary text-center mb-6 text-5xl ">{children || label}</h1>
    );
};

Card.Title = CardTitle;

Card.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

CardTitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    label: PropTypes.string
};
export default Card;