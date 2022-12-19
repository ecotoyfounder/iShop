import React from "react";
import PropTypes from "prop-types";

const InstagramButton = ({src}) => {
    return (
        <a href="https://www.instagram.com/ecotoyofficial/" rel="noreferrer" target="_blank">
            <img src={src} className="w-9 ml-5 hover:animate-pulse"/>
        </a>
    );
};

InstagramButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default InstagramButton;