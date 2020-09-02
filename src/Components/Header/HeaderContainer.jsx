import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutThunkCreator } from '../../State/authReducer';
import { initializeThunkCreator } from '../../State/appReducer';


class HeaderAPIContainer extends React.Component{

    render(){
        return <Header {...this.props}/>;
    }  
}
let mapStateToProps = (state) => ({login: state.auth.login, isAuth: state.auth.isAuth})

export default connect(mapStateToProps, {initializeThunkCreator, logoutThunkCreator}) (HeaderAPIContainer)