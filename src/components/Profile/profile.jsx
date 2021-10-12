import React from "react";
import cssClasses from "./profile.module.css";
import {ProfileInfo} from "./ProfileInfo/profile-info";
import axios from "axios";
import {addPost, setUserProfile, updateNewPost} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Posts} from "./Posts/posts";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.getAndSetProfile();
    }

    getAndSetProfile() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || '2'}`).then(({data}) => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            <div className={cssClasses.profile}>
                <ProfileInfo userProfile={this.props.userProfile}/>
                <Posts {...this.props}/>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostMessage,
        userProfile: state.profilePage.userProfile
    };
};

const mapDispatchToProps = {
    addPost,
    updateNewPost,
    setUserProfile
};

const WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,mapDispatchToProps)(WithUrlDataContainerComponent);