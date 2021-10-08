import React from "react";
import cssClasses from "./posts.module.css";
import {Post} from "../Post/post";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/profile-reducer";

export const Posts = (props) => {
    const posts = props.profilePage.posts
        .map(post => <Post key={post.id} text={post.text} id={post.id} likesCount={post.likesCount}/>);

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    const onChangeTextarea = (event) => {
        const action = updateNewPostActionCreator(event.target.value);
        props.dispatch(action);
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea name="message" id="" cols="30" rows="10"
                    onChange={onChangeTextarea}
                    value={props.profilePage.newPostMessage}/>
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