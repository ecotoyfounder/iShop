import {createSlice} from "@reduxjs/toolkit";
import categoryService from "../services/category.service";

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
        requestedCreateCategory(state) {
            state.isLoading = true;
        },
        receivedCreateCategory(state, action) {
            state.isLoading = false;
            state.entities.push(action.payload);
        },
        requestedCreateCategoryFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestedUpdateCategory(state) {
            state.isLoading = true;
        },
        receivedUpdateCategory(state, action) {
            state.isLoading = false;
            state.entities.forEach((item) => {
                if (item._id === action.payload._id) {
                    item.name = action.payload.name;
                }
            });
        },
        requestedUpdateCategoryFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestedDeleteCategory(state) {
            state.isLoading = true;
        },
        receivedDeleteCategory(state, action) {
            state.isLoading = false;
            state.entities = state.entities.filter(item => item._id !== action.payload);
        },
        requestedDeleteCategoryFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

const {reducer: categoriesReducer, actions} = categorySlice;
const {
    requestedCategories,
    receivedCategories,
    requestedCategoriesFailed,
    requestedCreateCategory,
    receivedCreateCategory,
    requestedCreateCategoryFailed,
    requestedUpdateCategory,
    receivedUpdateCategory,
    requestedUpdateCategoryFailed,
    requestedDeleteCategory,
    receivedDeleteCategory,
    requestedDeleteCategoryFailed
} = actions;

export const loadCategories = () => async (dispatch) => {
    dispatch(requestedCategories());
    try {
        const categories = await categoryService.fatchAllCategories();
        dispatch(receivedCategories(categories));
    } catch (e) {
        dispatch(requestedCategoriesFailed(e.message));
    }
};

export const deleteCategory = (id) => async (dispatch) => {

    dispatch(requestedDeleteCategory());
    try {
        await categoryService.deleteCategory(id);
        dispatch(receivedDeleteCategory(id));
    } catch (e) {
        dispatch(requestedDeleteCategoryFailed(e.message));
    }
};

export const createCategory = (data) => async (dispatch) => {

    dispatch(requestedCreateCategory());
    try {
        const newCategory = await categoryService.createCategory(data);
        dispatch(receivedCreateCategory(newCategory));
    } catch (e) {
        dispatch(requestedCreateCategoryFailed(e.message));
    }
};

export const updateCategory = (data) => async (dispatch) => {
    dispatch(requestedUpdateCategory());
    try {
        const newCategory = await categoryService.updateCategory(data);
        dispatch(receivedUpdateCategory(newCategory));
    } catch (e) {
        dispatch(requestedUpdateCategoryFailed(e.message));
    }
};

export const getCategories = () => (state) => state.category.entities;
export const getCategoryById = (id) => (state) => state.good.entities.find(item => item._id === id);

export default categoriesReducer;