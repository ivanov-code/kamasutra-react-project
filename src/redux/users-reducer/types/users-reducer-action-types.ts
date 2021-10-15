import {AnyAction} from "redux";
import {IUserResponseModel} from "../../../types/response-models";

export type UsersReducerActionType = IToggleFollowAction | ISetUsersAction | ISetCurrentPageAction | ISetPagesAmountAction | ISetIsLoadingAction;

export interface IToggleFollowAction extends AnyAction {
    userId: number;
}
export interface ISetUsersAction extends AnyAction {
    users: IUserResponseModel[];
}
export interface ISetCurrentPageAction extends AnyAction {
    pageNumber: number;
}
export interface ISetPagesAmountAction extends AnyAction {
    pagesAmount: number;
}
export interface ISetIsLoadingAction extends AnyAction {
    isLoading: boolean;
}