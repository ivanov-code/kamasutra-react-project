import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <ul>
                <li>
                    <a href="#">
                        Profile
                    </a>
                </li>
                <li>
                    <a href="#">
                        Messages
                    </a>
                </li>
                <li>
                    <a href="#">
                        News
                    </a>
                </li>
                <li>
                    <a href="#">
                        Music
                    </a>
                </li>
                <li>
                    <a href="#">
                        Settings
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;