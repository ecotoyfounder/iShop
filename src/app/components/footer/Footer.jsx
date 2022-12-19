import React from "react";
import {NavLink} from "react-router-dom";
import YouTubeButton from "./YouTubeButton";
import youtubeImg from "../ui/images/Youtube_icon.png";
import InstagramButton from "./InstagramButton";
import instImg from "../ui/images/Instagram_icon.png";
import TwitterButton from "./TwitterButton";
import twitterImg from "../ui/images/Twitter_icon.png";
import FacebookButton from "./FacebookButton";
import facebookImg from "../ui/images/Fb_icon.png";

const Footer = () => {
    return (
        <div
            className="flex justify-end absolute bottom-0 z-50 mt-10 py-3 h-20 sticky backdrop-blur transition-colors duration-500c">

            <NavLink to="admin"
                     className="btn-footer mr-10 text-center pt-1">Admin
            </NavLink>
            <YouTubeButton src={youtubeImg}/>
            <InstagramButton link="/" src={instImg}/>
            <TwitterButton link="/" src={twitterImg}/>
            <FacebookButton link="/" src={facebookImg}/>
        </div>
    );
};

export default Footer;
