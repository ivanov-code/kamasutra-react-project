const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE-NEW-POST-VALUE';

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_VALUE, text});

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            if (!state.newPostMessage) {
                console.error('Message is empty in profileReducer');
                return state;
            }

            const newPost = {
                text: state.newPostMessage,
                id: state.posts.length ? state.posts[state.posts.length - 1].id + 1 : 0,
                likesCount: 0
            };

            state.posts.push(newPost);
            return state;

        case UPDATE_NEW_POST_VALUE:
            state.newPostMessage = action.text;
            return state;

        default:
            console.error('Incorrectly action.type in dialogsReducer');
            return state;
    }
};