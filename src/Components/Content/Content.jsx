import React from 'react';
import css from './Content.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfoWithHook from './Posts/ProfileInfoWithHook';


const Content = (props) => {
    return(
        <div>
            <ProfileInfoWithHook status={props.status} profile={props.profile} 
            updateStatusThunkCreator={props.updateStatusThunkCreator}/>
            <PostsContainer/>
        </div>
    );
}
export default Content;