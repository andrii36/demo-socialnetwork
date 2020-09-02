import React from 'react';
import css from './Content.module.css';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Content from './Content';
import { setUsersProfile, getStatusThunkCreator, updateStatusThunkCreator, getUserProfileThunkCreator } from '../../State/contentPageReducer';
import { withRouter, Redirect } from 'react-router-dom';
import withRedirect from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


class ContentAPIContainer extends React.Component {

    componentDidMount(){
        let userId = this.props.match.params.userId;
        if(!userId) userId = this.props.authorizedUserId;
        this.props.getUserProfileThunkCreator(userId)
        
        this.props.getStatusThunkCreator(userId);
    }

    render(){
        if(!this.props.isAuth){
            return <Redirect to="/login"/>
        }
        return(
            <Content {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return{
        profile: state.contentPage.profile,
        status: state.contentPage.status,
        authorizedUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect (mapStateToProps, {setUsersProfile, getStatusThunkCreator, updateStatusThunkCreator, getUserProfileThunkCreator}),
    withRouter,
    withRedirect
)(ContentAPIContainer);