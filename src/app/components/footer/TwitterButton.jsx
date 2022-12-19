import React from "react";
import PropTypes from "prop-types";

const TwitterButton = ({src}) => {
    return (
        <a href="src/app/components/footer/TwitterButton" rel="noreferrer" target="_blank">
            <img src={src} className="w-9 ml-5 hover:animate-pulse"/>
        </a>
    );
};

TwitterButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default TwitterButton;