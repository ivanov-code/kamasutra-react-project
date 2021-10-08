const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';

export const toggleFollowActionCreator = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: !user.followed
                        };
                    }
                    return user;
                })
            };

        default:
            return state;
    }
};