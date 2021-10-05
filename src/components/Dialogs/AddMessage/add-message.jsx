import React from "react";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../../redux/store";

export const AddMessage = (props) => {
    const textareaRef = React.createRef();

    const sendMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    const onChangeTextarea = (event) => {
        const action = updateNewMessageActionCreator(event.target.value);
        props.dispatch(action);
    };

    return (
        <div>
            <textarea name="message" cols="30" rows="10"
                      ref={textareaRef}
                      onChange={onChangeTextarea}
                      value={props.state.newDialogMessage}
            />
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
};