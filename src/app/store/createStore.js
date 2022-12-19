import authReducer from "./authSlice";

const {combineReducers, configureStore} = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    auth: authReducer,
});

export function createStore() {
    return configureStore({
        reducer: rootReducer,
    });
}