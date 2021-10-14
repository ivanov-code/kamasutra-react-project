import React, {FC} from "react";
import cssClasses from "../dialogs.module.css";
import {IMessage} from "../../../redux/dialogs-reducer/dialogs-reducer";

interface IMessageItem extends IMessage {
}

export const MessageItem: FC<IMessageItem> = (props) => {
    return (
        <li key={props.id} className={cssClasses.dialogs__messageItem}>{props.text}</li>
    )
}