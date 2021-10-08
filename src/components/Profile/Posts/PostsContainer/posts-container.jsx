import React from "react";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../../redux/profile-reducer";
import {Posts} from "../posts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onChangeTextarea: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    };
};

export const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);