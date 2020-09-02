let initialState = {
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
]
};

const dialogsPageReducer = (state = initialState, action) => {
    if(action.type==="ADD-NEW-MESSAGE"){
        let newMessage = {
            id : 5,
            message : action.data
        }
        let stateCopy = {...state}
        stateCopy.myMessagesArray = [...state.myMessagesArray]
        stateCopy.myMessagesArray.push(newMessage);
        return stateCopy;
    }else if(action.type==="CHANGE-MESSAGE-TEXT"){
        let stateCopy = {...state};
        stateCopy.newMessageText = action.newText;
        return stateCopy;
    }
    return state;
}

export const addMessageActionCreator = (data) => {
    return(
        {type:"ADD-NEW-MESSAGE", data}
    )
}

export default dialogsPageReducer;