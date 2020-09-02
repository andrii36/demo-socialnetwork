import { usersAPI } from "../API/api";

let initialState = {    
    users: [],
    totalUsers: 0,
    usersPerPage: 11,
    currentPage: 1,
    isLoading: false,
    isFollowLoading: false,

}
let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
let SET_TOTAL_USERS = "SET_TOTAL_USERS";
let SET_IS_LOADING = "SET_IS_LOADING";

const usersPageReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(action.userId===u.id){
                        return {...u, followed:true}                        
                    }
                    return u;
                })
            }
            case UNFOLLOW:
                return {
                    ...state,
                    users: state.users.map(u => {
                        if(action.userId===u.id){
                            return {...u, followed:false}                        
                        }
                        return u;
                    })
                } 
            case SET_USERS:
                return {
                    ...state,
                    users: action.users
                }
            case SET_CURRENT_PAGE:
                return {
                    ...state,
                    currentPage: action.page
                }
            case SET_TOTAL_USERS:
                return {
                    ...state,
                    totalUsers: action.total
                }
            case SET_IS_LOADING:
                return {
                    ...state,
                    isLoading: action.isLoading
                }
            
            default: return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsers = (total) => ({type:SET_TOTAL_USERS, total});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

export const getUsersThunkCreator = (usersPerPage, currentPage) => {
    return (dispatch) => {
            dispatch(setIsLoading(true))
            dispatch(setCurrentPage(currentPage))
            usersAPI.getUsers(usersPerPage, currentPage)
                .then((data)=> {
                    dispatch(setIsLoading(false))
                    dispatch(setTotalUsers(data.totalCount))
                    dispatch(setUsers(data.items))
                })
    }
}
export const unfollowThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.unfollowUser(userId)
                                .then((data)=> {
                                    if(data.resultCode==0){
                                        dispatch(unfollow(userId))
                                    }
                                })
    }
}
export const followThunkCreator = (userId) => {
    return (dispatch) => {
        usersAPI.followUser(userId)
            .then((data)=> {
                if(data.resultCode==0){
                    dispatch(follow(userId))
                }
            })                    
    }
}
export default usersPageReducer;