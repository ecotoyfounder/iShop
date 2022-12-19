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
            className="flex justify-end z-50 sticky relative backdrop-blur transition-colors duration-500c">

            <NavLink to="admin"
                     className="bg-primary mr-10 text-light text-xl text-center px-2 py-0.5 rounded-full h-9 w-50 hover:bg-secondary hover:text-bgLight hover:font-medium">Admin
            </NavLink>
            <YouTubeButton src={youtubeImg}/>
            <InstagramButton link="/" src={instImg}/>
            <TwitterButton link="/" src={twitterImg}/>
            <FacebookButton link="/" src={facebookImg}/>
        </div>
    );
};

export default Footer;
