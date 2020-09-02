let initialState = {
    musicList : [
        {id : 1, name : "Song1"},
        {id : 2, name : "Song1"},
        {id : 3, name : "Song1"},
        {id : 4, name : "Song4"},
        {id : 5, name : "Song5"}
    ],
    newSongName : "",
    noSongsMessage : "",
    foundSongs : [
        
    ]
};

const musicPageReducer = (state = initialState, action) => {
        if(action.type==="ADD-SONG"){
            state.musicList.push({id:1, name:state.newSongName})
            state.newSongName="";  
        }else if(action.type==="UPDATE-NEW-SONG-NAME"){
            state.newSongName = action.text;
        }else if(action.type==="SEARCH"){
            for(let i=0;i<state.musicList.length;i++){
                if(state.musicList[i].name===state.newSongName){
                    state.foundSongs.push({id:1, name:state.newSongName})
                }
            }
        }
    return state;
}
export default musicPageReducer;