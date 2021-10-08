import cssClasses from "./dialogs.module.css";
import {DialogItem} from "./DialogItem/dialog-item";
import React from "react";

export const DialogsList = ({dialogs}) => {
    return (
        <ul className={cssClasses.dialogs__list}>
            {dialogs.map(({id,name}) =>
                <DialogItem key={id} name={name} id={id}/>)}
        </ul>
    );
};