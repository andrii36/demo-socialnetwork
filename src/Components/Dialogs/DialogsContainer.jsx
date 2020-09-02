import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator } from '../../State/dialogsPageReducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withRedirect from '../../HOC/withAuthRedirect';
let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        onAddNewMessage: (data) => {
            dispatch(addMessageActionCreator(data))
        }
    }
}
const DialogsContainer = compose(
    connect (mapStateToProps, mapDispatchToProps),
    withRedirect)
    (Dialogs);

export default DialogsContainer;