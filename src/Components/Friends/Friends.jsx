import React from 'react';
import css from './Friends.module.css';
import Friend from './Friend/Friend';
import { addFriendActionCreator, changeTextActionCreator } from '../../State/state';

const Friends = (props) => {
    
    let friends = props.friendsPage.friendsArray.map(p => {return <Friend name={p.name}/>});
    
    let newFriend = React.createRef();
    
    let click = () => {
        props.store.dispatch(addFriendActionCreator());
    }
    
    let changeText = () => {
        let newFriendName = newFriend.current.value;
        props.store.dispatch(changeTextActionCreator(newFriendName))
    }


    return(
        <div className={css.friends}>
            My Friends
            <div>
                <textarea ref={newFriend} onChange={changeText} value={props.friendsPage.newFriendName}></textarea>
            </div>
            <div>
                <button onClick={click}>add friend</button>
            </div>
            <div>
                {friends}
            </div>
        </div>
    );
}
export default Friends;