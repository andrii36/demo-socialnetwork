import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { loginThunkCreator } from '../../State/authReducer';
import { Redirect } from 'react-router-dom';
import { required } from '../../Utils/Validators/validators';
import { Input } from '../FormsControls/formsControls';
import style from './../FormsControls/formsControls.module.css'

const LoginForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Email" name="email" component={Input} validate={required}/>
            </div>
            <div>
                <Field placeholder="Password" name="password" type="password" component={Input} validate={required}/>
            </div>
            <div>
                <Field name="rememberMe" component="input" type="checkbox"/> remember me
            </div>
                {props.error && <div className={style.error}>{props.error}</div>}
            <div>
                <button >LogIn</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData)
    }
    if(props.isAuth){
        return <Redirect to={"/profile"}/>
    }
    return(
        <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,{loginThunkCreator})(Login);