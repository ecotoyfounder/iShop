import React from "react";
import NavBar from "./app/components/navbar/NavBar";
import {useLocation, useRoutes} from "react-router-dom";
import routes from "./routes";
import FooterMainPage from "./app/components/footer/FooterMainPage";
import {useSelector} from "react-redux";
import {isLoggedInSelector} from "./app/store/authSlice";


function App() {

    const isLoggedIn = useSelector(isLoggedInSelector());
    const location = useLocation();
    const elements = useRoutes(routes(isLoggedIn, location));

    return (
        <div>
            <NavBar/>
            {elements}
            <FooterMainPage/>
        </div>

    );
}

export default App;
