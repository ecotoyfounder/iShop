import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: [],
        user: null
    },
    reducers: {
        addedGood(state, action) {
            state.entities.push(action.payload);
        },
        removeOneGood(state, action) {

            const index = state.entities.findIndex(el => el._id === action.payload);
            if (index !== -1) {
                state.entities.splice(index, 1);
            }
        },
        deletedGood(state, action) {
            state.entities = state.entities.filter(el => el._id !== action.payload);
        }
    }
});

const {reducer: cartReducer, actions} = cartSlice;
const {addedGood, deletedGood, removeOneGood} = actions;

export const addGoodInCart = (good) => (dispatch) => {
    dispatch(addedGood(good));
};

export const removeOneGoodFromCart = (goodId) => (dispatch) => {
    dispatch(removeOneGood(goodId));
};

export const deleteGoodFromCart = (id) => (dispatch) => {
    dispatch(deletedGood(id));
};

export const getCart = () => (state) => state.cart.entities;

export default cartReducer;