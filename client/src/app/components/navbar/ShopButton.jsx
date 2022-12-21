import React from "react";
import {NavLink} from "react-router-dom";
import PropTypes from "prop-types";
import styles from "../../../App.module.scss";


const ShopButton = ({link}) => {
    return (
        <NavLink to={link}>
            <div className={styles.parent}>
                <button className={styles.buttonPrimary}>Shop</button>
            </div>
        </NavLink>
    );
};

ShopButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default ShopButton;
