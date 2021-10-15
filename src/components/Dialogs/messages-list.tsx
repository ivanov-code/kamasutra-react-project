import cssClasses from "./dialogs.module.css";
import {MessageItem} from "./MessageItem/message-item";
import React, {FC} from "react";
import {IMessage} from "../../redux/dialogs-reducer/dialogs-reducer";

interface MessagesListPropsType {
    messages: IMessage[];
}

export const MessagesList: FC<MessagesListPropsType> = ({messages}) => {
    return (
        <ul className={cssClasses.dialogs__messages}>
            {messages.map(({id, text}) =>
                <MessageItem key={id} text={text} id={id}/>)}
        </ul>
    );
};