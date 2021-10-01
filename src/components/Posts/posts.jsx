import React from "react";
import cssClasses from "./posts.module.css";
import Post from "../Post/post";

const Posts = () => {
    return (
        <div className={cssClasses.posts}>
            <h3>My posts</h3>
            <div>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default Posts;