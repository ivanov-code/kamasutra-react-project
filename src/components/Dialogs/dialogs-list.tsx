import cssClasses from "./dialogs.module.css";
import {DialogItem} from "./DialogItem/dialog-item";
import React, {FC} from "react";
import {IDialog} from "../../redux/dialogs-reducer/dialogs-reducer";

interface IDialogsListPropsType {
    dialogs: IDialog[];
}

export const DialogsList: FC<IDialogsListPropsType> = ({dialogs} ) => {
    return (
        <ul className={cssClasses.dialogs__list}>
            {dialogs.map(({id,name}) =>
                <DialogItem key={id} name={name} id={id}/>)}
        </ul>
    );
};