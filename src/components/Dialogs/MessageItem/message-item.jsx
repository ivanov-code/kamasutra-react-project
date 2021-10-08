import React from "react";
import cssClasses from "../dialogs.module.css";

export const MessageItem = (props) => {
    return (
        <li key={props.id} className={cssClasses.dialogs__messageItem}>{props.text}</li>
    )
}