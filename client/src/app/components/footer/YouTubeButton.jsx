import React from "react";
import PropTypes from "prop-types";

const YouTubeButton = ({src}) => {
    return (
        <a href="https://www.youtube.com/channel/UC7UTOFLq6exMVzrekO0-Z5A" rel="noreferrer" target="_blank">
            <img src={src} className="w-9 hover:animate-pulse"/>
        </a>
    );
};

YouTubeButton.propTypes = {
    link: PropTypes.string,
    src: PropTypes.string
};

export default YouTubeButton;