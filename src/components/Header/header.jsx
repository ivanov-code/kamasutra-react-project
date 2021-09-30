import React from "react";
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <div className="header__content">
                <img className="header__avatar-img"
                     src="https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album"
                     alt="avatar"/>
                <span className="header__profile-name">
                    Profile Name
                </span>
            </div>
        </div>
    );
};

export default Header;