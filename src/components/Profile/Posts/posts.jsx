import React from "react";
import cssClasses from "./posts.module.css";
import {Post} from "../Post/post";

export const Posts = (props) => {
    const posts = props.posts
        .map(post => <Post key={post.id} text={post.text} id={post.id} likesCount={post.likesCount} />);

    const textareaRef = React.createRef();
    const addPost = () => {
        props.addPost(textareaRef.current.value);
    };

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea ref={textareaRef} name="message" cols="30" rows="10"></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {posts}
            </div>
        </div>
    );
};