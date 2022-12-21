import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../../App.module.scss";


const BoardsButton = ({link}) => {
    return (
        <NavLink to={link}>
            <div className={styles.parent}>
                <button className={styles.buttonLight}>Boards</button>
            </div>
        </NavLink>
    );
};

BoardsButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default BoardsButton;
