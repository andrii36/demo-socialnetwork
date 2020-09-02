import { authAPI } from "../API/api";
import { stopSubmit } from "redux-form";

let initialState = {
    id : null,
    email: null,
    login: null,
    isAuth: false
}

let SET_USER_DATA = "SET_USER_DATA";
let LOGOUT = "LOGOUT";

const authReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USER_DATA: {
            return {
                ...state,
                id: action.data.id,
                email: action.data.email,
                login: action.data.login,
                isAuth: true
            };
        };
        case LOGOUT: {
            return {
                ...state,
                id: null,
                email: null,
                login: null,
                isAuth: false
            }
        }
        default: 
            return state;
    }
}

export const authMeThunkCreator = () => {
    return (dispatch) => {
        return authAPI.authMe()
        .then(data => {
            if(data.resultCode===0){
                dispatch(setUserData(data.data))
            }
        })
    }
}

export const loginThunkCreator = (formData) => {
    return dispatch => {
        authAPI.login(formData)
            .then(responce => {
                if(responce.data.resultCode===0){
                    dispatch(authMeThunkCreator())
                }else{
                    let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "some error"
                    dispatch(stopSubmit("login", {_error: message}))
                }
            })
    }
}
export const logoutThunkCreator = () => {
    return dispatch => {
        authAPI.logout()
            .then(responce => {
                if(responce.data.resultCode===0){
                   dispatch(logout())
                }
            })
    }
}
      
export const logout = () => ({type: LOGOUT});
export const setUserData = (data) => ({type: SET_USER_DATA, data});

export default authReducer;