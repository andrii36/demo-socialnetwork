import React from 'react';
import css from './Posts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from '../../../Utils/Validators/validators';
import { Textarea } from '../../FormsControls/formsControls';

const Posts = (props) => {
    
    let posts = props.postsArray.map(p => <Post post={p.post} likesCount={p.likesCount}/>)

    const onSubmit = (data) => {
        props.addNewPost(data.newPost);
    }
    return(
        <div>
            <PostFormRedux onSubmit={onSubmit}/>
            <div>
                {posts}
            </div>
        </div>
    );
}

const maxLength11 = maxLength(11);
const PostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newPost" placeholder="new post" validate={[required, maxLength11]}/>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({form: "postForm"})(PostForm);

export default Posts;