import React from 'react';
import css from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const User = (props) => {
    return (
        <div className={css.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJubvac5LtNOwJtYNtNx6m67AKuexoQ3KxfZJxjtdkVQPaaN0c"/>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
        </div>
    );
}
export default User;