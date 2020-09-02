import React from 'react';
import css from './Music.module.css';
import Song from './Song';

const Music = (props) => {
    
    //let songList = props.musicPage.musicList.map(p => {return <Song name = {p.name}/> });
    let songList = props.musicPage.foundSongs.map(p => {return <Song name = {p.name}/> });

    let textArea = React.createRef();

    let textChange = () => {
        let songText = textArea.current.value;
        props.store.dispatch({type:"UPDATE-NEW-SONG-NAME", text:songText});
    }

    let buttonClick = () => {
        props.store.dispatch({type:"SEARCH"})
        props.musicPage.newSongName = "";
    }
    
    return(
        <div className={css.musicPage}>
            <textarea ref={textArea} onChange={textChange} value={props.musicPage.newSongName}></textarea>
            <div>
                <button onClick={buttonClick}>
                    find song
                </button>
            </div>
            <div>
                {songList}
                {props.musicPage.noSongsMessage}
            </div>
        </div>
    );
}
export default Music;