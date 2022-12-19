import React from "react";
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {getIsLoggedIn} from "../store/authSlice";

const PrivatePage = ({children}) => {

    const authUser = useSelector(getIsLoggedIn());

    if (!authUser) {
        return <Navigate to="/login"/>;
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
