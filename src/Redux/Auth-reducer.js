import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_SUCCESS = 'auth/GET_CAPTCHA_SUCCESS';

let initializationState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   capthaURL: null
}

const authReducer = (state = initializationState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_SUCCESS: 
            return {
                ...state,
                ...action.payload,
            }
        default: 
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {userId, email, login, isAuth} });
export const getCaptchaSuccess = (capthaURL) => ({type: GET_CAPTCHA_SUCCESS, payload: {capthaURL} });

export const auth = () => {
    return async (dispatch) => {
        let data = await authAPI.me()
        if (data.resultCode === 0) {
            let { id, login, email } = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}

export const login = (email, password, rememberMe, captcha) => {
    return async(dispatch) => {
        let data = await authAPI.login(email, password, rememberMe, captcha);
            if (data.resultCode === 0) {
              dispatch(auth());
            } else {
                if (data.resultCode === 10) {
                    dispatch(getCaptchaUrl());
                }
                let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
                dispatch(stopSubmit("login", {_error: message}));
            }
    }
}

export const logout = () => {
    return async(dispatch) => {
        let data = await authAPI.logout();
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
    }
}

export const getCaptchaUrl = () => {
    return async(dispatch) => {
        const response = await securityAPI.getCaptchaUrl();
        const captcha = response.data.url;
        dispatch(getCaptchaSuccess(captcha));
    }
}

export default authReducer;