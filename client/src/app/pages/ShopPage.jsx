import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fatchAllGoods} from "../store/goodSlice";
import PropTypes from "prop-types";
import {addGoodInCart} from "../store/cartSlice";
import sort from "../utils/sort";
import {Link} from "react-router-dom";
import cartImg from "./images/basket_ic.png";
import BackButton from "../components/BackButton";
import {getCategories} from "../store/categorySlice";
import useSearch from "../components/Search";
import searchImg from "./images/Search_ic.png";


const ShopPage = () => {
    const [toggle, setToggle] = useState(true);
    const dispatch = useDispatch();
    const goods = useSelector(fatchAllGoods());
    const categoriesList = useSelector(getCategories());
    const {searchQuery, handleSearchQuery, filterGoods} = useSearch();

    const newGoods = filterGoods(sort.price(toggle, goods), searchQuery);

    const handleAdd = (good) => {
        dispatch(addGoodInCart(good));
    };

    const handleSort = () => {
        setToggle(prev => !prev);
    };

    function getNameCategory(id) {
        return categoriesList.find(el => el._id === id)?.name;
    }

    return (
        <div>

            <div className="flex justify-between">
                <div className="flex">
                    <BackButton/>
                </div>
                <div className="flex">
                    <img src={searchImg} alt="search" className="w-9 mr-4"/>
                    <input
                        type="text"
                        name="searchQuery"
                        placeholder="Search..."
                        onChange={handleSearchQuery}
                        value={searchQuery}
                        className="focus:outline-1 focus:outline-bgDark rounded-md pl-2 w-56 text-darkColor"
                    />
                </div>
                <div className="flex justify-end">
                    <h1 className="mr-4 pt-1 text-darkColor text-md font-semibold">Sort by Price</h1>
                    <button className="btn-arrow-dark"
                            onClick={handleSort}>{toggle ?
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"/>
                        </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"/>
                        </svg>
                    }</button>
                </div>
            </div>
            <div className="grid gap-4 grid-cols-4 mt-10">
                {newGoods.map(item => (
                    <div key={item._id}
                         className="shadow-xl shadow-bgDark relative bg-bgDark bg-opacity-10 rounded-md w-full aspect-square h-heightC mt-8 py-4">
                        <div className="text-center">
                            <div className="flex justify-between mx-5">
                                <Link to={`/shop/good/${item._id}`}
                                      className="bg-secondary text-light w-14 h-7 rounded-full font-semibold pt-1 text-sm">More</Link>
                                <h1 className="font-bold text-xl text-primary">{item.name}</h1>
                            </div>
                            <div className="text-end text-xl text-darkColor font-semibold mx-5">
                                {getNameCategory(item.category)}
                            </div>
                            <img src={item.image} className="mx-auto my-4" width="265px" height="265px"/>
                            <div className="flex absolute bottom-5 inset-x-0 mx-5 text-purple-900">
                                <h3 className="font-bold text-md mr-10 pt-1">{item.price}€</h3>
                                <Link to="/cart"><img className="w-10 ml-7 justify-center hover:animate-pulse"
                                                      src={cartImg}/></Link>
                                <button className="btn-primary absolute w-20 ml-40 h-8 text-sm"
                                        onClick={() => handleAdd(item)}>Add to
                                    Cart
                                </button>
                            </div>
                        </div>
                    </div>))}
            </div>
        </div>
    );
};

ShopPage.propTypes = {
    good: PropTypes.object
};

export default ShopPage;
