import React from "react";
import {FriendsSmallList} from "../friends-small-list";
import {connect} from "react-redux";
import {RootStateType} from "../../../../redux/redux-store";

export type FriendsSmallListPropsType = ReturnType<typeof mapStateToProps>;
const mapStateToProps = (state: RootStateType) => {
    return {
        friendsList: state.navbar.friends
    }
};

export const FriendsSmallListContainer = connect(mapStateToProps)(FriendsSmallList);