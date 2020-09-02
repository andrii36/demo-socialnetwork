import React from 'react';
import css from './../Dialogs.module.css';

const MyMessage = (props) => {

    return(
        <div className={css.myMessage}>
            <p></p>
            {props.message}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJubvac5LtNOwJtYNtNx6m67AKuexoQ3KxfZJxjtdkVQPaaN0c"/>
        </div>
    );
}
export default MyMessage;