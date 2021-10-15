import React, {FC} from "react";
import cssClasses from "../dialogs.module.css";
import {NavLink} from "react-router-dom";
import {IDialog} from "../../../redux/dialogs-reducer/dialogs-reducer";

interface IDialogItemPropsType extends IDialog {
}
export const DialogItem: FC<IDialogItemPropsType> = (props) => {
    return (
        <li key={props.id} className={cssClasses.dialogs__listItem}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </li>
    )
};