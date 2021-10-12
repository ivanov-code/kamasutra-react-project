const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_VALUE = 'UPDATE_NEW_POST_VALUE';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPost = () => ({type: ADD_POST});
export const updateNewPost = (text) => ({type: UPDATE_NEW_POST_VALUE, text});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});

const initialState = {
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

export const profileReducer = (state = initialState, action) => {
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

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostMessage: ''
            };

        case UPDATE_NEW_POST_VALUE:
            return {
                ...state,
                newPostMessage: action.text
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.userProfile
            };

        default:
            return state;
    }
};