import React from "react";
import cssClasses from "./dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={cssClasses.dialogs}>
            <ul className={cssClasses.dialogs__list}>
                <li className={cssClasses.dialogs__listItem}>

                </li>
            </ul>
            <div className={cssClasses.dialogs__messages}></div>
        </div>
    );
};

export default Dialogs;