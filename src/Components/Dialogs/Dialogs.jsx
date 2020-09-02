import React from 'react';
import css from './Dialogs.module.css';
import User from './User/User';
import Message from './Message/Message';
import MyMessage from './MyMessage/MyMessage';
import { Field, reduxForm } from 'redux-form';
import { required } from '../../Utils/Validators/validators';
import { Textarea } from '../FormsControls/formsControls';

const Dialogs = (props) => {

    let dialogs = props.dialogsPage.usersArray.map(d => <User name={d.name} id={d.id}/>)

    let messages = props.dialogsPage.messagesArray.map(m => <Message message={m.message}/>)
    
    let myMessages = props.dialogsPage.myMessagesArray.map(mm => <MyMessage message={mm.message}/>)
    
    const onSubmit = (data) => {
        props.onAddNewMessage(data.newMessage)
    }
    return(
        <div className={css.dialogsPage}>
            <div className={css.chats}>
                {dialogs}
            </div>
            <div className={css.messages}>   
                {messages}
                {myMessages}
                <MessageFormRedux onSubmit={onSubmit}/>
            </div>
        </div>
    );
}
const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} name="newMessage" placeholder="message" validate={[required]}/>
            <div>
            <button>add message</button>
            </div>
        </form>
    )
}

const MessageFormRedux = reduxForm({form: "messageForm"})(AddMessageForm);

export default Dialogs;