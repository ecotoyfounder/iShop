import React from "react";
import styles from "../../../App.module.scss";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {logOut} from "../../store/authSlice";

const LogOutButton = ({link}) => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logOut())
    }
    return (
        <NavLink to={link}>
            <div className={styles.parent}>
                <button className={styles.buttonLight} onClick={handleLogOut}>Log Out</button>
            </div>
        </NavLink>
    );
};

LogOutButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default LogOutButton;
