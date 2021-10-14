import {Reducer} from "redux";
import {IAddMessage, IDialogsReducerAction, IUpdateNewMessage} from "./types/dialogs-reducer-action-types";
import {DialogsActionTypeEnum} from "./types/dialogs-action-type.enum";

export const addMessage = (): IAddMessage => ({type: DialogsActionTypeEnum.ADD_MESSAGE});
export const updateNewMessage = (text: string): IUpdateNewMessage  => ({type: DialogsActionTypeEnum.UPDATE_NEW_DIALOG_MESSAGE_VALUE, text});

const initialState: IDialogsInitialState = {
    messages: [
        {
            text: 'Hello how are you?',
            id: 1
        },
        {
            text: 'I am fine thank you!',
            id: 2
        },
        {
            text: 'What do you do?',
            id: 3
        },
        {
            text: 'Nothing',
            id: 4
        },
    ],
    dialogs: [
        {
            name: 'Petr',
            id: 1
        },
        {
            name: 'Vasiliy',
            id: 2
        },
        {
            name: 'Katya',
            id: 3
        },
        {
            name: 'Danil',
            id: 4
        },
    ],
    newDialogMessage: ''
}

export const dialogsReducer: Reducer<IDialogsInitialState,IDialogsReducerAction> = (state = initialState, action) => {
    switch (action.type) {
        case DialogsActionTypeEnum.ADD_MESSAGE:
            if (!state.newDialogMessage) {
                console.error('Message is empty in dialogsReducer');
                return state;
            }

            const newDialogMessage = {
                text: state.newDialogMessage,
                id: state.messages.length ? state.messages[state.messages.length - 1].id + 1 : 0
            };

            return {
                ...state,
                messages: [...state.messages, newDialogMessage],
                newDialogMessage: ''
            };


        case DialogsActionTypeEnum.UPDATE_NEW_DIALOG_MESSAGE_VALUE:
            return {
                ...state,
                newDialogMessage: action.text
            };

        default:
            return state;
    }
};

export interface IMessage {
    text: string;
    id: number;
}

export interface IDialog {
    name: string;
    id: number;
}

export interface IDialogsInitialState {
    messages: IMessage[];
    dialogs: IDialog[];
    newDialogMessage: string;
}