import React from "react";
import {Outlet} from "react-router-dom";

const LayoutShop = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default LayoutShop;
