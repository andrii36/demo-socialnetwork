import React from 'react';
import { NavLink } from 'react-router-dom';

const Friend = (props) => {
    return(
        <div>
            <NavLink to = "/name">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJubvac5LtNOwJtYNtNx6m67AKuexoQ3KxfZJxjtdkVQPaaN0c"/>
                {props.name}
            </NavLink>
            
        </div>
    );
}
export default Friend;