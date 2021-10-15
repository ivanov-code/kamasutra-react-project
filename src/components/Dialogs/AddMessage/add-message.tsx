import React, {FC} from "react";
import {AddMessageContainerPropsType} from "./AddMessageContainer/add-message";

interface IAddMessagePropsType extends AddMessageContainerPropsType{
}
export const AddMessage: FC<IAddMessagePropsType> = (props) => {
    const textareaRef: React.Ref<HTMLTextAreaElement> = React.createRef();

    const sendMessage = (): void => {
        props.addMessage();
    };

    const onChangeTextarea = (event: any): void => {
        props.updateNewMessage(event.target.value);
    };

    return (
        <div>
            <textarea name="message"
                      ref={textareaRef}
                      onChange={onChangeTextarea}
                      value={props.newDialogMessage}
            />
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
};