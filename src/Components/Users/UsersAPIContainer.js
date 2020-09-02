import React from 'react';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../Preloader/Preloader';

class UsersAPIContainer extends React.Component {
    componentDidMount(){
        this.props.getUsersThunkCreator(this.props.usersPerPage, this.props.currentPage)
    }
    onPageChange = (page) => {
        this.props.getUsersThunkCreator(this.props.usersPerPage, page)
    }
    
    render(){
        return (
            <>
            {this.props.isLoading?<Preloader/>:null}
            <Users {...this.props} onPageChange={this.onPageChange}/>
            </>
        )
    }
}
export default UsersAPIContainer;