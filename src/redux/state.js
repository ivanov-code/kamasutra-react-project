import {rerenderEntireTree} from "../render";

export const state = {
    profilePage: {
        posts:  [
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
        ]
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
}
export const addPost = (text) => {
    if (!text) {
        console.error('Message is empty');
        return;
    }

    const newPost = {
        text,
        id: state.profilePage.posts.length ? state.profilePage.posts[state.profilePage.posts.length-1].id+1 : 0,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};