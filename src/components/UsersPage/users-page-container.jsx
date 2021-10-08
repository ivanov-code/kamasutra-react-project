import React from "react";
import {UsersPage} from "./users-page";
import {connect} from "react-redux";
import {setUsersActionCreator, toggleFollowActionCreator} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    };
};

export const UsersPageContainer = connect(mapStateToProps, mapDispatchToProps)(UsersPage);