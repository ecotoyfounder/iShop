import React from "react";
import PropTypes from "prop-types";
import {Navigate, useLocation} from "react-router-dom";

const PrivatePage = ({children}) => {

    const location = useLocation();
    const auth = false;

    if (!auth) {
        return <Navigate to="/login" state={{from: location}}/>;
    }

    return children;
};

PrivatePage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default PrivatePage;
