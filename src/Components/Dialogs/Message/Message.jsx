import React from 'react';
import css from './../Dialogs.module.css';

const Message = (props) => {
    return(
        <div className={css.message}>
            <p></p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJubvac5LtNOwJtYNtNx6m67AKuexoQ3KxfZJxjtdkVQPaaN0c"/>
            {props.message}
        </div>
    );
}
export default Message;