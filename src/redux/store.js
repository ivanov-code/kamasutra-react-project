const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE_VALUE = 'UPDATE-NEW-DIALOG-MESSAGE-VALUE';

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
        switch (action.type) {
            case ADD_POST:
                if (!this._state.profilePage.newPostMessage) {
                    console.error('Message is empty');
                    return;
                }

                const newPost = {
                    text: this._state.profilePage.newPostMessage,
                    id: this._state.profilePage.posts.length ? this._state.profilePage.posts[this._state.profilePage.posts.length - 1].id + 1 : 0,
                    likesCount: 0
                };

                this._state.profilePage.posts.push(newPost);
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_POST_VALUE:
                this._state.profilePage.newPostMessage = action.text;
                this._callSubscriber(this._state);
                break;

            case ADD_MESSAGE:
                if (!this._state.dialogsPage.newDialogMessage) {
                    console.error('Message is empty');
                    return;
                }

                const newDialogMessage = {
                    text: this._state.dialogsPage.newDialogMessage,
                    id: this._state.dialogsPage.messages.length ? this._state.dialogsPage.messages[this._state.dialogsPage.messages.length - 1].id + 1 : 0
                };

                this._state.dialogsPage.messages.push(newDialogMessage);
                this._callSubscriber(this._state);
                break;
            case UPDATE_NEW_DIALOG_MESSAGE_VALUE:
                this._state.dialogsPage.newDialogMessage = action.text;
                this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, text});
export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_MESSAGE_VALUE, text});

window.store = store;