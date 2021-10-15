import React from "react";
import {Post} from "../Post/post";
import {ProfileContainerPropsType} from "../profile";

export const Posts = (props: ProfileContainerPropsType) => {
    const posts = props.posts
        .map(post => <Post key={post.id} text={post.text} id={post.id} likesCount={post.likesCount}/>);

    const addPost = () => {
        props.addPost();
    };

    const onChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPost(event.target.value);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea name="message"
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