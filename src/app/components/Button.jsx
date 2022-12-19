import React from "react";
import PropTypes from "prop-types";
import styles from "../../App.module.scss";


const Button = ({label, children}) => {
    return (
        <div className={styles.parent}>
            <button
                type="submit"
                className={`${styles.buttonPrimary} + m-auto mt-10`}
            >
                {label || children || "button"}
            </button>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    label: PropTypes.string,
};

export default Button;