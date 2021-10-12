import React from "react";
import {addMessage, updateNewMessage} from "../../../../redux/dialogs-reducer";
import {AddMessage} from "../add-message";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        newDialogMessage: state.dialogsPage.newDialogMessage
    };
}

const mapDispatchToProps = {
    addMessage,
    updateNewMessage
}

export const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);