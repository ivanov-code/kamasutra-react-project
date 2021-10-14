import {AnyAction} from "redux";

export type IDialogsReducerAction = IAddMessage | IUpdateNewMessage;

export interface IAddMessage extends AnyAction {
}

export interface IUpdateNewMessage extends AnyAction {
    text: string;
}