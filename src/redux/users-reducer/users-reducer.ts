import {IUserResponseModel} from "../../types/response-models";
import {Reducer} from "redux";
import {
    ISetCurrentPageAction,
    ISetIsLoadingAction,
    ISetPagesAmountAction,
    ISetUsersAction,
    IToggleFollowAction,
    UsersReducerActionType
} from "./types/users-reducer-action-types";
import {UsersActionTypeEnum} from "./types/users-action-type.enum";

export const toggleFollow = (userId: number):IToggleFollowAction => ({type: UsersActionTypeEnum.TOGGLE_FOLLOW, userId});
export const setUsers = (users: IUserResponseModel[]):ISetUsersAction => ({type: UsersActionTypeEnum.SET_USERS, users});
export const setCurrentPage = (pageNumber: number):ISetCurrentPageAction => ({type: UsersActionTypeEnum.SET_CURRENT_PAGE, pageNumber});
export const setPagesAmount = (pagesAmount: number):ISetPagesAmountAction => ({type: UsersActionTypeEnum.SET_PAGES_AMOUNT, pagesAmount});
export const setIsLoading = (isLoading: boolean):ISetIsLoadingAction => ({type: UsersActionTypeEnum.SET_IS_LOADING, isLoading});

const initialState: IUsersInitialState = {
    users: [],
    pagesAmount: 1,
    currentPageNumber: 1,
    isLoading: true
}

export const usersReducer: Reducer<IUsersInitialState,UsersReducerActionType> = (state = initialState, action) => {
    switch (action.type) {
        case UsersActionTypeEnum.SET_USERS:
            return {
                ...state,
                users: [...action.users]
            };

        case UsersActionTypeEnum.TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: !user.followed
                        };
                    }
                    return user;
                })
            };

        case UsersActionTypeEnum.SET_CURRENT_PAGE:
            return {
                ...state,
                currentPageNumber: action.pageNumber
            };

        case UsersActionTypeEnum.SET_PAGES_AMOUNT:
            return {
                ...state,
                pagesAmount: action.pagesAmount
            };

        case UsersActionTypeEnum.SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        default:
            return state;
    }
};

interface IUsersInitialState {
    users: IUserResponseModel[];
    pagesAmount: number;
    currentPageNumber: number;
    isLoading: boolean;
}