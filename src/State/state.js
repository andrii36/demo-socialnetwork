import contentPageReducer from "./contentPageReducer";
import friendsPageReducer from "./friendsPageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

let store = {
    _state: {
        contentPage : {
            postsArray : [
            {post:"Hey everyone", likesCount:"12"},
            {post:"Hey everyone", likesCount:"12"},
            {post:"Hey everyone", likesCount:"12"},
            {post:"Hey everyone", likesCount:"12"},
            {post:"Hey everyone", likesCount:"12"}
            ],
            newPostText : ""
            },
        dialogsPage : {
            usersArray : [
            {id:"1", name:"Martin"},
            {id:"2", name:"Kate"},
            {id:"3", name:"Jimmy"} 
        ],
            messagesArray : [
            {id:"1", message:"Hi, how are you?"},
            {id:"2", message:"that is good"},
            {id:"3", message:"Thank you"} 
        ],
            myMessagesArray : [
            {id:"1", message:"My message 1"},
            {id:"2", message:"My message 2"},
            {id:"3", message:"My message 3"} 
        ],
            newMessageText:""
        },
        friendsPage : {
            friendsArray:[
            {id: 1, name:"Anthony Willams"},
            {id: 2, name:"Anthony Willams"}
            ],
            newFriendText:""
        },
        musicPage: {
            musicList: [
                {id: 1, name: "song1"},
                {id: 2, name: "song2"},
                {id: 3, name: "song3"}
            ],
            searchTextarea: ""
        },
        sidebar : {
            friendsArray : []
        }
    },
    _rerenderApp () {
    },
    getState() {
        return this._state
    },
    subscriber (observer) {
        this._rerenderApp = observer;
    },
    dispatch(action) {
        this._state.contentPage = contentPageReducer(this._state.contentPage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsPageReducer(this._state.friendsPage, action);

        this._rerenderApp(this._state);
    },

    addMusic(text) {
        let newSong = {
            id: 1, name: text
        }
        this._state.musicPage.musicList.push(newSong)
        this._state.musicPage.searchTextarea=""
        this._rerenderApp(this._state)
    },
    changeMusicText(textareaValue) {
        this._state.musicPage.searchTextarea = textareaValue;
        this._rerenderApp(this._state)
    }    
}
export const changeMessageTextActionCreator = (newText) => {
    return(
        {type:"CHANGE-MESSAGE-TEXT", newText:newText}
    )
}
export const changeTextActionCreator = (name) => {
    return(
        {type:"CHANGE-FRIEND-TEXT", name:name}
    )
}
export const addFriendActionCreator = () => {
    return(
        {type:"ADD-FRIEND"}
    )
}
export const addPostActionCreator = () => {
    return {type: "ADD-POST"}
}
export const changePostTextActionCreator = (text) => {
    return{type: "CHANGE-POST-TEXT", text: text}
}
export default store;