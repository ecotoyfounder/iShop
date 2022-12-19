import React from "react";
import {useSelector} from "react-redux";
import {getAuthUser} from "../store/authSlice";
import GoodsList from "./GoodsList";

const AdminPage = () => {

    const user = useSelector(getAuthUser());


    return (
        <div className="m-auto text-lg font-bold text-darkColor">
            <h1 className="text-center">Hello, {user.name}!</h1>
            <GoodsList/>
        </div>
    );
};

export default AdminPage;
