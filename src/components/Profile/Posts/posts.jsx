import React from "react";
import {Post} from "../Post/post";

export const Posts = (props) => {
    const posts = props.posts
        .map(post => <Post key={post.id} text={post.text} id={post.id} likesCount={post.likesCount}/>);

    const addPost = () => {
        props.addPost();
    };

    const onChangeTextarea = (event) => {
        props.onChangeTextarea(event.target.value);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea name="message" id="" cols="30" rows="10"
                    onChange={onChangeTextarea}
                    value={props.newPostMessage}/>
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