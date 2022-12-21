import authReducer from "./authSlice";
import categoriesReducer from "./categorySlice";
import goodsReducer from "./goodSlice";
import cartReducer from "./cartSlice";

const {combineReducers, configureStore} = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoriesReducer,
    good: goodsReducer,
    cart: cartReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}