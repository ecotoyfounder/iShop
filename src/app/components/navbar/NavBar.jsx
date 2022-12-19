import React from "react";
import NavBarWrapper from "./NavBarWrapper";
import HomeButton from "./HomeButton";
import homeImg from "../ui/images/ecotoyLogo.png";
import cartImg from "../ui/images/basket_ic.png";
import searchImg from "../ui/images/Search_ic.png";
import burgerImg from "../ui/images/Burger_mnu.png";
import CartButton from "./CartButton";
import SearchButton from "./SearchButton";
import BurgerButton from "./BurgerButton";
import ShopButton from "./ShopButton";
import BlocksButton from "./BlocksButton";
import CardsButton from "./CardsButton";
import BoardsButton from "./BoardsButton";


const NavBar = () => {
    return (
        <NavBarWrapper>
            <div className="relative flex justify-start">
                <HomeButton link="/" src={homeImg}/>
                <CartButton link="cart" src={cartImg}/>
                <SearchButton link="/" src={searchImg}/>
            </div>
            <div className="flex justify-center">
                <BlocksButton link="blocks"/>
                <CardsButton link="cards"/>
                <BoardsButton link="boards"/>
                <ShopButton link="shop"/>
            </div>
            <div className="flex justify-end hover:animate-pulse grid grid-auto-rows: min-content">
                <BurgerButton link="/" src={burgerImg}/>
            </div>
        </NavBarWrapper>
    );
};

export default NavBar;
