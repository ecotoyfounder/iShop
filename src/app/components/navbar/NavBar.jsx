import React from "react";
import NavBarWrapper from "./NavBarWrapper";
import HomeButton from "./HomeButton";
import homeImg from "../ui/images/ecotoyLogo.png";
import cartImg from "../ui/images/basket_ic.png";
import CartButton from "./CartButton";
import ShopButton from "./ShopButton";
import LogOutButton from "./LogOutButton";
import {getIsLoggedIn} from "../../store/authSlice";
import {useSelector} from "react-redux";
import LogInButton from "./LogInButton";


const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());


    return (
        <NavBarWrapper>
            <div className="relative flex justify-start z-50">
                <HomeButton link="/" src={homeImg}/>
            </div>
            <div className="flex justify-end">
                <ShopButton link="shop"/>
                {isLoggedIn ? <LogOutButton link="/"/> : <LogInButton link="login">Log In</LogInButton>}
                <CartButton link="cart" src={cartImg}/>
            </div>
        </NavBarWrapper>
    );
};

export default NavBar;
