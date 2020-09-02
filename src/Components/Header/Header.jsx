import React from 'react';
import css from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className={css.header}>
            <img src="https://www.tailorbrands.com/wp-content/uploads/2019/09/Juicy-logo-100-1-300x300.jpg"/>
            <div className={css.login}>
                <div>
                    <a>
                    {props.isAuth ? props.login : <NavLink to="/login">Login</NavLink>}
                    {props.isAuth && <button onClick={props.logoutThunkCreator}>Logout</button>}
                    </a>
                </div>
                
                
            </div>
        </div>
    );
}
export default Header;