import React from 'react';
import css from './Music.module.css';

const Song = (props) => {
    
    return(
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJubvac5LtNOwJtYNtNx6m67AKuexoQ3KxfZJxjtdkVQPaaN0c"/>
            {props.name}
        </div>
    );
}
export default Song;