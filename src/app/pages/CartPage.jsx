import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addGoodInCart, deleteGoodFromCart, getCart, removeOneGoodFromCart} from "../store/cartSlice";
import {getAuthUser} from "../store/authSlice";
import BackButton from "../components/BackButton";
import {Link} from "react-router-dom";

const CartPage = () => {

    const currentCart = useSelector(getCart());
    const dispatch = useDispatch();
    const user = useSelector(getAuthUser());

    const handleAdd = (good) => {
        dispatch(addGoodInCart(good));
    };
    const handleRemoveFromCart = (good) => {
        dispatch(deleteGoodFromCart(good));
    };

    const handleRemoveOneGood = (goodId) => {
        dispatch(removeOneGoodFromCart(goodId));
    };


    const totalIncreace = (cart) => {
        const newArray = [];

        for (const good of cart) {
            const found = newArray.find(item => item._id === good._id);

            if (found) {
                found.count++;
                found.totalprice += found.price;
            } else {
                const newGood = {...good, count: 1, totalprice: good.price};
                newArray.push(newGood);
            }
        }
        return newArray;
    };

    const newCart = totalIncreace(currentCart);
    console.log(newCart);
    return (newCart.length > 0 ?
        <div>
            <BackButton/>
            <div className="text-center text-lg font-bold text-darkColor">
                <h1>Hello, {user.name}!</h1>
            </div>
            {newCart.map(item =>
                <div key={item._id}
                     className="flex justify-between rounded-xl relative bg-bgDark bg-opacity-30 m-3 p-4 text-darkColor">
                    <div className="flex justify-start">
                        <h1 className="font-bold tex-md">{item.name}</h1>
                    </div>
                    <button className="btn-arrow-light absolute ml-marginLeftX3" onClick={() => {
                        handleAdd(item);
                    }}>+
                    </button>
                    <h1 className="absolute ml-marginLeftXX font-semibold text-center w-8 h-8 rounded-md">{item.count}</h1>
                    <button className="btn-arrow-light pb-3  absolute ml-marginLeftXX3" onClick={() => {
                        handleRemoveOneGood(item._id);
                    }}
                    >-
                    </button>
                    <button className="absolute ml-marginLeftXXX" onClick={() => handleRemoveFromCart(item._id)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-6 h-6 hover:text-red-600 hover:stroke-2">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"/>
                        </svg>
                    </button>
                    <div className="font-semibold">{Math.floor(item.totalprice)}€</div>
                </div>
            )}
            <div className="text-end mr-6 text-darkColor text-xl mt-20 font-semibold">
                <h1 className="mb-10">Total
                    Price: {newCart.map(e => e.totalprice).reduce((a, b) => Math.floor(a + b))}€</h1>
                <Link to="/" className="btn-secondary px-6 py-1">Buy</Link>
            </div>
        </div>
        : <div className="text-center text-lg font-bold text-darkColor">
            <h1>Hello, {user.name}!</h1>
        </div>);
};

export default CartPage;
