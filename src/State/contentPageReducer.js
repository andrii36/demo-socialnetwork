import { profileAPI } from "../API/api";

let initialState = {
    postsArray : [
    {post:"Hey everyone", likesCount:"12"},
    {post:"Hey everyone", likesCount:"12"},
    {post:"Hey everyone", likesCount:"12"},
    {post:"Hey everyone", likesCount:"12"},
    {post:"Hey everyone", likesCount:"12"}
    ],
    profile: null,
    status: ""
    };

let ADD_POST = "ADD-POST";
let SET_USERS_PROFILE = "SET_USERS_PROFILE";
let SET_STATUS = "SET_STATUS";
let UPDATE_STATUS = "UPDATE_STATUS";

const contentPageReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                post : action.data,
                likesCount : 11
            }
            return {
                ...state,
                postsArray: [...state.postsArray, newPost]
            };
        };
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        };
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS: {
            return{
                ...state,
                status: action.status
            }
        }
        default: 
            return state;
    }
}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response))
        })
    } 
}
export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status)
        .then(response => {
            if(response.resultCode===0){
                dispatch(updateUserStatus(status))
            }
            
        })
    } 
}
export const getUserProfileThunkCreator = (userId) => dispatch => {
    profileAPI.getUserProfile(userId)
    .then(response => {
        dispatch(setUsersProfile(response.data));
    })
}

export const updateUserStatus = (status) => ({type: UPDATE_STATUS, status});
export const addNewPost = (data) => ({type: ADD_POST, data});
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_STATUS, status})

export default contentPageReducer;