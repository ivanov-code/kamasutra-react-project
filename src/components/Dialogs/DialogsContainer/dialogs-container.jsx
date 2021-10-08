import React from "react";
import {Dialogs} from "../dialogs";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    };
}

export const DialogsContainer = connect(mapStateToProps)(Dialogs);