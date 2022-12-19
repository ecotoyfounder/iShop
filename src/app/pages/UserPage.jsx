import React from "react";
import {useSelector} from "react-redux";
import {getUserById} from "../store/users";
import PropTypes from "prop-types";
import CartPage from "./CartPage";
import GoodsCard from "../components/ui/GoogsCard";

const UserPage = ({userId}) => {

    const user = useSelector(getUserById(userId));

    if (user) {
        return (
            <div className="container">
                <CartPage user={user}/>
                <GoodsCard data={user.good}/>
            </div>
        );
    } else {
        return <h2>Loading...</h2>;
    }

};

UserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default UserPage;
