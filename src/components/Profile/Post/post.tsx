import React, {FC} from "react";
import cssClasses from "./post.module.css";

interface IPostPropsType {
    text: string;
    id: number;
    likesCount: number;
}

export const Post: FC<IPostPropsType> = (props) => {
    return (
        <div className={cssClasses.post}>
            {props.text}
            <hr/>
            Likes {props.likesCount}
        </div>
    );
};