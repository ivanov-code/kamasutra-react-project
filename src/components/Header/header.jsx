import React from "react";
import cssClasses from "./header.module.css";

const Header = () => {
    return (
        <div className={cssClasses.header}>
            <div className={cssClasses.header__content}>
                <img className={cssClasses.header__avatarImg}
                     src="https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album"
                     alt="avatar"/>
                <span className={cssClasses.header__profileName}>
                    Profile Name
                </span>
            </div>
        </div>
    );
};

export default Header;