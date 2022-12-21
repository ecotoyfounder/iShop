import {createSlice} from "@reduxjs/toolkit";
import goodService from "../services/good.service";

const goodSlice = createSlice({
    name: "good",
    initialState: {
        entities: [],
        isLoading: false,
        error: null
    },
    reducers: {
        requestedGoods(state) {
            state.isLoading = true;
        },
        receivedGoods(state, action) {
            state.isLoading = false;
            state.entities = action.payload;
        },
        requestedGoodsFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestedCreateGood(state) {
            state.isLoading = true;
        },
        receivedCreateGood(state, action) {
            state.isLoading = false;
            state.entities.push(action.payload);
        },
        requestedCreateGoodFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestedUpdateGood(state) {
            state.isLoading = true;
        },
        receivedUpdateGood(state, action) {
            state.isLoading = false;
            state.entities.forEach((item) => {
                if (item._id === action.payload._id) {
                    Object.keys(item).forEach(el => item[el] = action.payload[el]);
                }
            });
        },
        requestedUpdateGoodFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestedDeleteGood(state) {
            state.isLoading = true;
        },
        receivedDeleteGood(state, action) {
            state.isLoading = false;
            state.entities = state.entities.filter(item => item._id !== action.payload);
        },
        requestedDeleteGoodFailed(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
});

const {reducer: goodsReducer, actions} = goodSlice;
const {
    requestedGoods, receivedGoods, requestedGoodsFailed, requestedCreateGood,
    receivedCreateGood,
    requestedCreateGoodFailed,
    requestedUpdateGood,
    receivedUpdateGood,
    requestedUpdateGoodFailed,
    requestedDeleteGood,
    receivedDeleteGood,
    requestedDeleteGoodFailed
} = actions;

export const loadGoods = () => async (dispatch) => {
    dispatch(requestedGoods());
    try {
        const goods = await goodService.fetchAllGoods();
        dispatch(receivedGoods(goods));
    } catch (e) {
        dispatch(requestedGoodsFailed(e.message));
    }
};

export const deleteGood = (id) => async (dispatch) => {

    dispatch(requestedDeleteGood());
    try {
        await goodService.deleteGood(id);
        dispatch(receivedDeleteGood(id));
    } catch (e) {
        dispatch(requestedDeleteGoodFailed(e.message));
    }
};

export const createGood = (data) => async (dispatch) => {

    dispatch(requestedCreateGood());
    try {
        const newGood = await goodService.createGood(data);
        dispatch(receivedCreateGood(newGood));
    } catch (e) {
        dispatch(requestedCreateGoodFailed(e.message));
    }
};

export const updateGood = (data) => async (dispatch) => {
    dispatch(requestedUpdateGood());
    try {
        const newGood = await goodService.updateGood(data);
        dispatch(receivedUpdateGood(newGood));
    } catch (e) {
        dispatch(requestedUpdateGoodFailed(e.message));
    }
};

export const fatchAllGoods = () => (state) => state.good.entities;
export const getGoodById = (id) => (state) => state.good.entities.find(item => item._id === id);

export default goodsReducer;