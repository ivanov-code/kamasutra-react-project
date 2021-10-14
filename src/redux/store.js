import {dialogsReducer} from "./dialogs-reducer/dialogs-reducer";
import {profileReducer} from "./profile-reducer/profile-reducer";

export const store = {
    _state: {
        profilePage: {
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
            newPostMessage: ''
        },
        dialogsPage: {
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
        },
        navbar: {
            friends: [
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
            ]
        }
    },
    get state() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._callSubscriber(this._state);
    }
};

window.store = store;