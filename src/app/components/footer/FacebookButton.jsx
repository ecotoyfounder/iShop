import React from "react";
import PropTypes from "prop-types";

const FacebookButton = ({src}) => {
    return (
        <a href="https://www.facebook.com/ecotoyofficial/" rel="noreferrer" target="_blank">
            <img src={src} className="w-9 ml-5 hover:animate-pulse"/>
        </a>
    );
};

FacebookButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default FacebookButton;