import React from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getGoodById} from "../store/goodSlice";
import BackButton from "../components/BackButton";
import {getCategories} from "../store/categorySlice";
import {addGoodInCart} from "../store/cartSlice";

const GoodPage = () => {

    const {goodId} = useParams();
    const good = useSelector(getGoodById(goodId));
    const categoriesList = useSelector(getCategories());
    const dispatch = useDispatch();

    const handleAdd = (good) => {
        dispatch(addGoodInCart(good));
    };

    function getNameCategory(id) {
        return categoriesList.find(el => el._id === id)?.name;
    }

    return (
        <div>
            <BackButton/>
            <div>
                <div className="text-center justify-between text-2xl font-bold text-darkColor">
                    {good.name}
                </div>
                <div className="flex relative justify-between mt-10 text-2xl font-bold text-darkColor">
                    <img src={good.image} alt="image" className="w-96 h-96 shadow-xl shadow-bgDark rounded-3xl"/>
                    <div
                        className="absolute px-10 py-5 text-xl  shadow-xl shadow-bgDark rounded-3xl font-semibold left-96 ml-10 w-textArea h-96 shadow-xl">
                        {good.description}
                    </div>
                    <div className="absolute top-0 right-0 justify-items-stretch">
                        {getNameCategory(good.category)}
                    </div>
                    <div className="absolute bottom-0 right-0 justify-items-stretch">
                        <button className="btn-primary absolute mt-1 w-20 right-20 h-8 text-sm"
                                onClick={() => handleAdd(good)}>Add to
                            Cart
                        </button>
                        {good.price}€
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoodPage;
