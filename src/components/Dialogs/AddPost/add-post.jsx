import React from "react";

export const AddPost = (props) => {
    const textareaRef = React.createRef();
    const sendMessage = () => {
        console.log(textareaRef.current.value);
    };

    return (
        <div>
            <textarea ref={textareaRef} name="message" id="" cols="30" rows="10"></textarea>
            <div>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    )
};