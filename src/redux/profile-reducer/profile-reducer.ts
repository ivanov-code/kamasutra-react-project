import {Reducer} from "redux";
import {IProfileResponseModel} from "../../types/response-models";
import {
    IAddPostAction,
    IProfileReducerAction,
    ISetUserProfileAction,
    IUpdateNewPostAction
} from "./types/profile-reducer-action-types";
import {ProfileActionTypeEnum} from "./types/profile-action-type.enum";

export const addPost = (): IAddPostAction => ({type: ProfileActionTypeEnum.ADD_POST});
export const updateNewPost = (text: string): IUpdateNewPostAction => ({type: ProfileActionTypeEnum.UPDATE_NEW_POST_VALUE, text});
export const setUserProfile = (userProfile: IProfileResponseModel): ISetUserProfileAction => ({type: ProfileActionTypeEnum.SET_USER_PROFILE, userProfile});

const initialState: IProfileInitialState = {
    posts: [
        {
            text: 'My first post',
            id: 1,
            likesCount: 4
        },
        {
            text: 'My second post',
            id: 2,
            likesCount: 4
        },
    ],
    newPostMessage: '',
    userProfile: null
}

export const profileReducer: Reducer<IProfileInitialState,IProfileReducerAction> = (state = initialState, action) => {
    switch (action.type) {
        case ProfileActionTypeEnum.ADD_POST:
            if (!state.newPostMessage) {
                console.error('Message is empty in profileReducer');
                return state;
            }

            const newPost = {
                text: state.newPostMessage,
                id: state.posts.length ? state.posts[state.posts.length - 1].id + 1 : 0,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostMessage: ''
            };

        case ProfileActionTypeEnum.UPDATE_NEW_POST_VALUE:
            return {
                ...state,
                newPostMessage: action.text
            };

        case ProfileActionTypeEnum.SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };

        default:
            return state;
    }
};

export interface IProfileInitialState {
    posts: IPost[];
    newPostMessage: string;
    userProfile: IProfileResponseModel | null
}

export interface IPost {
    text: string;
    id: number;
    likesCount: number;
}

