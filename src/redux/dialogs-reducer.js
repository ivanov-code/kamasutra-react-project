const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_DIALOG_MESSAGE_VALUE = 'UPDATE-NEW-DIALOG-MESSAGE-VALUE';

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (text) => ({type: UPDATE_NEW_DIALOG_MESSAGE_VALUE, text});

export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            if (!state.newDialogMessage) {
                console.error('Message is empty in dialogsReducer');
                return state;
            }

            const newDialogMessage = {
                text: state.newDialogMessage,
                id: state.messages.length ? state.messages[state.messages.length - 1].id + 1 : 0
            };

            state.messages.push(newDialogMessage);
            return state;

        case UPDATE_NEW_DIALOG_MESSAGE_VALUE:
            state.newDialogMessage = action.text;
            return state;

        default:
            console.error('Incorrectly action.type in dialogsReducer');
            return state;
    }
};