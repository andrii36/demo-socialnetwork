import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return(
        <div className={css.post}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJubvac5LtNOwJtYNtNx6m67AKuexoQ3KxfZJxjtdkVQPaaN0c"/>
            {props.post}
            <div>
                like({props.likesCount})
            </div>
        </div>
    );
}
export default Post;