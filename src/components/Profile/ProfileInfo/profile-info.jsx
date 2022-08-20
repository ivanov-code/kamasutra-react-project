import React from "react";
import cssClasses from "./profile-info.module.css";
import userDefaultImg from "../../../assets/images/user-default.jpeg"

export const ProfileInfo = (props) => {
    if (!props.userProfile) {
        return <img className={cssClasses.profileInfo__img} src={userDefaultImg} alt="avatar"/>
    }
    return (
        <div>
            <img className={cssClasses.profileInfo__img} src={props.userProfile.photos.large || userDefaultImg} alt="avatar"/>
            <div>{props.userProfile.aboutMe || null}</div>
            <div>
                <span>{props.userProfile.contacts.vk || null}</span>
                <span>{props.userProfile.contacts.instagram || null}</span>
                <span>{props.userProfile.contacts.twitter || null}</span>
            </div>
        </div>
    );
};