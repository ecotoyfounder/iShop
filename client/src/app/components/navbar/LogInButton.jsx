import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../../App.module.scss";

const LogInButton = ({link}) => {
    return (
        <NavLink to={link}>
            <div className={styles.parent}>
                <button className={styles.buttonSecondary}>Log In</button>
            </div>
        </NavLink>
    );
};

LogInButton.propTypes = {
    link: PropTypes.string,
};

export default LogInButton;
