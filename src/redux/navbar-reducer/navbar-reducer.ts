const initialState: INavbarInitialState = {
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

export const navbarReducer = (state = initialState) => {
    return state;
};

export interface INavbarInitialState {
    friends: IFriend[];
}

export interface IFriend {
    name: string;
    id: number;
}