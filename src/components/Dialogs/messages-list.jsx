import cssClasses from "./dialogs.module.css";
import {MessageItem} from "./MessageItem/message-item";
import React from "react";

export const MessagesList = ({messages}) => {
    return (
        <ul className={cssClasses.dialogs__messages}>
            {messages.map(({id, text}) =>
                <MessageItem key={id} text={text} id={id}/>)}
        </ul>
    );
};