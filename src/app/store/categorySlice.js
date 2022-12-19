import {createSlice} from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        entities: [],
        isLoading: false,
        error: null
    },
    reducers: {
        requestedCategories(state) {
            state.isLoading = true;
        },
        receivedCategories(state, action) {
            state.isLoading = false;
            state.entities = action.payload;
        },
        requestedCategoriesFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

const {reducer: categoriesReducer, actions} = categorySlice;
const {requestedCategories, receivedCategories, requestedCategoriesFailed} = actions;

export const loadCategories = () => (dispatch) => {
    dispatch(requestedCategories());
    try {
        const data = [];
        receivedCategories(data);
    } catch (e) {
        dispatch(requestedCategoriesFailed(e.message));
    }
};

export const fatchAllCategories = () => (state) => state.category.entities;

export default categoriesReducer;