import React from "react";
import boyImg from "./images/boy4.png";
import styles from "../../App.module.scss";
import childImg from "./images/childSVG.svg";
import happinessImg from "./images/happinessSVG.svg";

const MainPage = () => {
    return (
        <div className={styles.parent}>
            <div className="flex items-end justify-between mx-auto relative">
                <img src={childImg} className="absolute mb-96 z-40 bg-opacity-10 animate-pulse"/>
                <img src={happinessImg} className="absolute mb-48 z-40 animate-pulse"/>
                <img src={boyImg} className="z-0"/>
            </div>
        </div>
    );
};

export default MainPage;
