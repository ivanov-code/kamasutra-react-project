import React, {FC} from "react";
import {addMessage, updateNewMessage} from "../../../../redux/dialogs-reducer/dialogs-reducer";
import {AddMessage} from "../add-message";
import {connect} from "react-redux";
import {RootStateType} from "../../../../redux/redux-store";

const mapStateToProps = (state: RootStateType) => {
    return {
        newDialogMessage: state.dialogsPage.newDialogMessage
    };
}

const mapDispatchToProps = {
    addMessage,
    updateNewMessage
}

export type AddMessageContainerPropsType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);