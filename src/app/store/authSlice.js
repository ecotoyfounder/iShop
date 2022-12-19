import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {setMessage} from "./messageSlice";
import authService from "../services/auth.service";

const user = JSON.parse(localStorage.getItem("user"));
export const signUp = createAsyncThunk(
    "auth/signUp",
    async ({username, email, password}, thunkAPI) => {
        try {
            const response = await authService.signUp(
                username,
                email,
                password
            );
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async ({username, password}, thunkAPI) => {
        try {
            const response = await authService.login(username, password);
            return response.data;
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
);
export const logOut = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});
const initialState = user
    ? {isLoggedIn: true, user: user.user}
    : {isLoggedIn: false, user: null};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signUp.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [signUp.rejected]: (state) => {
            state.isLoggedIn = false;
        },
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
        [logOut.fulfilled]: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});
const {reducer: authReducer, name} = authSlice;

export const isLoggedInSelector = () => (state) => state[name].isLoggedIn;
export default authReducer;
