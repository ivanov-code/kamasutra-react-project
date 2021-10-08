import React from "react";
import cssClasses from "./profile.module.css";
import {ProfileInfo} from "./ProfileInfo/profile-info";
import {PostsContainer} from "./Posts/PostsContainer/posts-container";

export const Profile = () => {
    return (
        <div className={cssClasses.profile}>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
};