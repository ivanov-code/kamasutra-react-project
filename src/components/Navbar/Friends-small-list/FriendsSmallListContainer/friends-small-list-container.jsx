import React from "react";
import {FriendsSmallList} from "../friends-small-list";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendsList: state.navbar.friends
    }
}

export const FriendsSmallListContainer = connect(mapStateToProps)(FriendsSmallList);