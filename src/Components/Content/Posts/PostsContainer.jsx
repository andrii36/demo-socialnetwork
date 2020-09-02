import React from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import {addNewPost} from '../../../State/contentPageReducer';

let mapStateToProps = (state) => ({
        postsArray: state.contentPage.postsArray,
})

export default connect (mapStateToProps, {addNewPost})(Posts);