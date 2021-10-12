const SET_USERS = 'SET_USERS';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_PAGES_AMOUNT = 'SET_PAGES_AMOUNT';
const SET_IS_LOADING = 'SET_IS_LOADING'

export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setPagesAmount = (pagesAmount) => ({type: SET_PAGES_AMOUNT, pagesAmount});
export const setIsLoading = (isLoading) => ({type: SET_IS_LOADING, isLoading});

const initialState = {
    users: [],
    pagesAmount: 1,
    currentPageNumber: 1,
    isLoading: true
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
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

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPageNumber: action.pageNumber
            };

        case SET_PAGES_AMOUNT:
            return {
                ...state,
                pagesAmount: action.pagesAmount
            };

        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            };

        default:
            return state;
    }
};