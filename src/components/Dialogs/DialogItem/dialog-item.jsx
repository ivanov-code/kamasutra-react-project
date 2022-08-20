import React from "react";
import cssClasses from "../dialogs.module.css";
import {NavLink} from "react-router-dom";

export const DialogItem = (props) => {
    return (
        <li key={props.id} className={cssClasses.dialogs__listItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
};