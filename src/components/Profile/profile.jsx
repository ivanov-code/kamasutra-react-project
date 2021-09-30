import React from "react";
import "./profile.css"

const Profile = () => {
    return (
        <div className="profile">
            <div className="profile__img-wrapper">
                <img className="profile__img" src="https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album" alt="avatar"/>
            </div>
            <div className="profile__posts">
                <div className="profile__post">
                    Post 1
                </div>
                <div className="profile__post">
                    Post 2
                </div>
            </div>
        </div>
    );
};

export default Profile;