import React from "react";
import cssClasses from "./post.module.css";

export const Post = (props) => {
    return (
        <div className={cssClasses.post}>
            {props.text}
            <hr/>
            Likes {props.likesCount}
        </div>
    );
};