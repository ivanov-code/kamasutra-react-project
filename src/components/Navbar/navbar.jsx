import React from "react";
import cssClasses from "./post.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={cssClasses.navbar}>
            <ul>
                <li>
                    <NavLink to='/my-profile' className={cssClasses.navbar__listItem}>
                        <div className={cssClasses.navbar__listItemIcon}></div>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/dialogs' className={cssClasses.navbar__listItem}>
                        <div className={cssClasses.navbar__listItemIcon}></div>
                        Messages
                    </NavLink>
                </li>
                <li>
                    <a href="#" className={cssClasses.navbar__listItem}>
                        <div className={cssClasses.navbar__listItemIcon}></div>
                        News
                    </a>
                </li>
                <li>
                    <a href="#" className={cssClasses.navbar__listItem}>
                        <div className={cssClasses.navbar__listItemIcon}></div>
                        Music
                    </a>
                </li>
                <li>
                    <a href="#" className={cssClasses.navbar__listItem}>
                        <div className={cssClasses.navbar__listItemIcon}></div>
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;