import {AnyAction} from "redux";
import {IProfileResponseModel} from "../../../types/response-models";

export type IProfileReducerAction = IAddPostAction | IUpdateNewPostAction | ISetUserProfileAction;

export interface IAddPostAction extends AnyAction {
}

export interface IUpdateNewPostAction extends AnyAction {
    text: string;
}

export interface ISetUserProfileAction extends AnyAction {
    userProfile: IProfileResponseModel
}