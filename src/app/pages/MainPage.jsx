import React from "react";
import boyImg from "./images/boy3.png";
import InstagramButton from "../components/footer/InstagramButton";
import instImg from "../components/ui/images/Instagram_icon.png";
import TwitterButton from "../components/footer/TwitterButton";
import twitterImg from "../components/ui/images/Twitter_icon.png";
import FacebookButton from "../components/footer/FacebookButton";
import facebookImg from "../components/ui/images/Fb_icon.png";
import YouTubeButton from "../components/footer/YouTubeButton";
import youtubeImg from "../components/ui/images/Youtube_icon.png";
import styles from "../../App.module.scss";
import childImg from "./images/childSVG.svg";
import happinessImg from "./images/happinessSVG.svg";
import {NavLink} from "react-router-dom";

const MainPage = () => {
    return (
        <div className={styles.parent}>
            <div className="flex items-end justify-between mx-auto relative">
                <img src={childImg} className="absolute mb-96 z-50 bg-opacity-10 animate-pulse"/>
                <img src={happinessImg} className="absolute mb-48 z-50 animate-pulse"/>
                <img src={boyImg} className="z-0"/>
                <div className="items-end">
                    <div className="flex mb-5 ml-0 z-50">
                        <NavLink to="login"
                                 className="bg-light text-primary text-xl text-center p-2 rounded-l-full w-full hover:bg-secondary hover:text-bgLight hover:font-medium">LogIn
                        </NavLink>
                        <NavLink to="signup"
                                 className="bg-primary text-light text-xl text-center p-2 rounded-r-full w-full hover:bg-purple-900 hover:text-bgLight hover:border-b-bgDark hover:font-medium">SignUp
                        </NavLink>
                    </div>
                    <div className="flex justify-end z-20">
                        <YouTubeButton src={youtubeImg}/>
                        <InstagramButton link="/" src={instImg}/>
                        <TwitterButton link="/" src={twitterImg}/>
                        <FacebookButton link="/" src={facebookImg}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
