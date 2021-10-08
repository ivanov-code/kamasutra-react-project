import React from "react";
import cssClasses from "./dialogs.module.css";
import {AddMessageContainer} from "./AddMessage/AddMessageContainer/add-message";
import {DialogsList} from "./dialogs-list";
import {MessagesList} from "./messages-list";

export const Dialogs = (props) => {
    return (
        <div className={cssClasses.dialogs}>
            <DialogsList dialogs={props.dialogs}/>
            <div>
                <MessagesList messages={props.messages}/>
                <AddMessageContainer/>
            </div>
        </div>
    );
};