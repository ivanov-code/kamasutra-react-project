import React from "react";
import {Dialogs} from "../dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";

export type IDialogsPropsType = ReturnType<typeof mapStateToProps>
const mapStateToProps = (state: RootStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    };
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs);