import React from "react";
import cssClasses from "./dialogs.module.css";
import {DialogItem} from "./DialogItem/dialog-item";
import {MessageItem} from "./MessageItem/message-item";
import {AddPost} from "./AddPost/add-post";

export const Dialogs = (props) => {
    const dialogsJSX = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name}
                                                                     id={dialog.id}/>);
    const messagesJSX = props.state.messages.map(message => <MessageItem key={message.id} text={message.text}
                                                                         id={message.id}/>);

    return (
        <div className={cssClasses.dialogs}>
            <ul className={cssClasses.dialogs__list}>
                {dialogsJSX}
            </ul>
            <div>
                <ul className={cssClasses.dialogs__messages}>
                    {messagesJSX}
                </ul>
                <AddPost />
            </div>

        </div>
    );
};