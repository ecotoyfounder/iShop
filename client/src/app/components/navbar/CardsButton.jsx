import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../../App.module.scss";


const CardsButton = ({link}) => {
    return (
        <NavLink to={link}>
            <div className={styles.parent}>
                <button className={styles.buttonLight}>Cards</button>
            </div>
        </NavLink>
    );
};

CardsButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default CardsButton;
