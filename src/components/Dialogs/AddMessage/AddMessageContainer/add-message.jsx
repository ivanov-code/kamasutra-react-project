import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../../redux/dialogs-reducer";
import {AddMessage} from "../add-message";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newDialogMessage: state.dialogsPage.newDialogMessage
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            const action = addMessageActionCreator();
            dispatch(action);
        },
        onChangeTextarea: (text) => {
            const action = updateNewMessageActionCreator(text);
            dispatch(action);
        }
    };
}

export const AddMessageContainer = connect(mapStateToProps,mapDispatchToProps)(AddMessage);