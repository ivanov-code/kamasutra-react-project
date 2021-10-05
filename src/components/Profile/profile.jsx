import React from "react";
import cssClasses from "./profile.module.css";
import {ProfileInfo} from "./ProfileInfo/profile-info";
import {Posts} from "./Posts/posts";

export const Profile = (props) => {
    return (
        <div className={cssClasses.profile}>
            <ProfileInfo />
            <Posts profilePage={props.state} dispatch={props.dispatch}/>
        </div>
    );
};