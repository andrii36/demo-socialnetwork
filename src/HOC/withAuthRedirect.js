import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

let withRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if(!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }
    let ConnectWithAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectWithAuthRedirectComponent;
}
export default withRedirect;