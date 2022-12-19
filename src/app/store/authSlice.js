import {createSlice} from "@reduxjs/toolkit";
import authService from "../services/auth.service";
import localStorageService from "../services/localStorage.service";

const authSlice = createSlice({
    name: "authUser",
    initialState: {
        entities: null,
        isLoading: false,
        isLoggedIn: false,
        error: null
    },
    reducers: {
        requestedSignUp(state) {
            state.isLoading = true;
        },
        recievedSignUp(state, action) {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.error = null;
            state.entities = action.payload;
        },
        requestedSignUpFailed(state, action) {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        requestedLogIn(state) {
            state.isLoading = true;
        },
        recievedLogIn(state, action) {
            state.isLoading = false;
            state.isLoggedIn = true;
            state.error = null;
            state.entities = action.payload;
        },
        requestedLogInFailed(state, action) {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.error = action.payload;
        },
        userLogOut(state) {
            state.isLoading = false;
            state.isLoggedIn = false;
            state.entities = null;
        }
    }
});

const {reducer: authReducer, actions} = authSlice;
const {
    requestedSignUp,
    recievedSignUp,
    requestedSignUpFailed,
    requestedLogIn,
    recievedLogIn,
    requestedLogInFailed,
    userLogOut
} = actions;

export const signUp = (data) => async (dispatch) => {
    dispatch(requestedSignUp());
    try {
        const {tokens, user} = await authService.create(data);
        await localStorageService.setAuthUser(tokens);

        dispatch(recievedSignUp(user));
    } catch (e) {
        dispatch(requestedSignUpFailed(e.message));
    }
};

export const logInTokens = (data) => async (dispatch) => {
    dispatch(requestedLogIn());
    try {
        const {tokens, user} = await authService.loginTokens(data);
        await localStorageService.setAuthUser(tokens);

        dispatch(recievedLogIn(user));
    } catch (e) {
        dispatch(requestedLogInFailed(e.message));
    }
};

export const logIn = (data) => async (dispatch) => {
    dispatch(requestedLogIn());
    try {
        const {tokens, user} = await authService.login(data);
        await localStorageService.setAuthUser(tokens);

        dispatch(recievedLogIn(user));
    } catch (e) {
        dispatch(requestedLogInFailed(e.message));
    }
};

export const logOut = () => async (dispatch) => {
    await localStorageService.removeAuthUser();
    await dispatch(userLogOut());
};

export const getIsLoggedIn = () => (state) => state.auth.isLoggedIn;

export const getAuthUser = () => (state) => state.auth.entities;

export default authReducer;