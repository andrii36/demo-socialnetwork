import { createStore, combineReducers, applyMiddleware } from "redux";
import contentPageReducer from "./contentPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import musicPageReducer from "./musicPageReducer";
import sidebarReducer from "./friendsPageReducer";
import usersPageReducer from "./usersPageReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({
    contentPage : contentPageReducer,
    dialogsPage : dialogsPageReducer,
    friendsPage : friendsPageReducer,
    musicPage : musicPageReducer,
    sidebar : sidebarReducer,
    usersPage : usersPageReducer,
    auth : authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;