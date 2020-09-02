import React from 'react';
import css from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    return(
        <div className={css.navbar}>
            <div className={css.items}>
                <div className={css.item}><NavLink to="/profile" activeClassName={css.active}>Profile</NavLink></div>
                <div className={css.item}><NavLink to="/dialogs" activeClassName={css.active}>Messages</NavLink></div>
                <div className={css.item}><NavLink to="/friends" activeClassName={css.active}>Friends</NavLink></div>
                <div className={css.item}><NavLink to="/music" activeClassName={css.active}>Music</NavLink></div>
                <div className={css.item}><NavLink to="/users" activeClassName={css.active}>Users</NavLink></div>
            </div>
        </div>
    );
}
export default Navbar;