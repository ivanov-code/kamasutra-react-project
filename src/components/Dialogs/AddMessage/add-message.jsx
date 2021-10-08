import React from "react";

export const AddMessage = (props) => {
    const textareaRef = React.createRef();

    const sendMessage = () => {
        props.sendMessage();
    };

    const onChangeTextarea = (event) => {
        props.onChangeTextarea(event.target.value);
    };

    return (
        <div>
            <textarea name="message" cols="30" rows="10"
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