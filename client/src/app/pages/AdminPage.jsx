import React from "react";
import {useSelector} from "react-redux";
import {getAuthUser} from "../store/authSlice";
import GoodsList from "./GoodsList";
import BackButton from "../components/BackButton";

const AdminPage = () => {

    const user = useSelector(getAuthUser());


    return (
        <div className="m-auto bottom-0 h-full text-lg font-bold text-darkColor">
            <BackButton/>
            <h1 className="text-center">Hello, {user.name}!</h1>
            <GoodsList/>
        </div>
    );
};

export default AdminPage;
