import React from "react";
import cssClasses from "./navbar.module.css";
import {NavLink} from "react-router-dom";
import {FriendsSmallListContainer} from "./Friends-small-list/FriendsSmallListContainer/friends-small-list-container";

export const Navbar = (props) => {
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
                    <NavLink to='/users' className={cssClasses.navbar__listItem}>
                        <div className={cssClasses.navbar__listItemIcon}></div>
                        Users
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

            <div>
                <FriendsSmallListContainer />
            </div>
        </div>
    );
};