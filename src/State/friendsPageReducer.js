let initialState = {
    friendsArray:[
    {id: 1, name:"Anthony Willams"},
    {id: 2, name:"Anthony Willams"}
    ],
    newFriendText:""
};

const friendsPageReducer = (state = initialState, action) => {
    if (action.type==="ADD-FRIEND") {
        let newFriend = {
        id:1,
        name:state.newFriendText
        }
        state.friendsArray.push(newFriend);
        state.newFriendText = "";
    }else if (action.type==="CHANGE-FRIEND-TEXT") {
        state.newFriendText = action.name;
    } 
    return state;
} 
export default friendsPageReducer;