import React from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {getGoodById} from "../store/goodSlice";
import BackButton from "../components/BackButton";
import {getCategories} from "../store/categorySlice";

const GoodPage = () => {

    const {goodId} = useParams();
    const good = useSelector(getGoodById(goodId));
    const categoriesList = useSelector(getCategories());

    function getNameCategory(id) {
        return categoriesList.find(el => el._id === id)?.name;
    }

    return (
        <div>
            <BackButton/>
            <div>
                <div className="text-center justify-between text-2xl font-bold text-darkColor">
                    {good.name}
                    {getNameCategory(good.category)}
                </div>
                <div className="justify-between w-full text-2xl font-bold text-darkColor">
                    {good.image}
                    {good.price}
                </div>
            </div>
        </div>
    );
};

export default GoodPage;
