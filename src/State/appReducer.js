import { authMeThunkCreator } from "./authReducer";

let initialState = {
    initialized : false
}

const INITIALIZE = "INITIALIZE";

const appReducer = (state = initialState, action) => {
    switch (action.type){
        case INITIALIZE: {
            return {
                ...state,
                initialized: true
            };
        };
        default: 
            return state;
    }
}

export const initializeThunkCreator = () => {
    return (dispatch) => {
        dispatch(authMeThunkCreator())
        .then(() => {
            dispatch(initialize())
        })
    }
}
      
export const initialize = () => ({type: INITIALIZE});

export default appReducer;