import {combineReducers, createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer/dialogs-reducer";
import {profileReducer} from "./profile-reducer/profile-reducer";
import {navbarReducer} from "./navbar-reducer/navbar-reducer";
import {usersReducer} from "./users-reducer/users-reducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    navbar: navbarReducer,
});
export const store = createStore(reducers);

type RootReducerType = typeof reducers;
export type RootStateType = ReturnType<RootReducerType>;