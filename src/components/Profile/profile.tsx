import React from "react";
import cssClasses from "./profile.module.css";
import {ProfileInfo} from "./ProfileInfo/profile-info";
import axios from "axios";
import {
    addPost,
    setUserProfile,
    updateNewPost
} from "../../redux/profile-reducer/profile-reducer";
import {connect} from "react-redux";
import {Posts} from "./Posts/posts";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {IProfileResponseModel} from "../../types/response-models";
import {RootStateType} from "../../redux/redux-store";

class ProfileContainer extends React.Component<ProfileContainerPropsType> {
    componentDidMount() {
        this.getAndSetProfile();
    }

    getAndSetProfile() {
        let userId = this.props.match.params.userId;
        axios.get<IProfileResponseModel>(`https://social-network.samuraijs.com/api/1.0/profile/${userId || '2'}`).then(({data}) => {
            this.props.setUserProfile(data);
        });
    }

    render() {
        return (
            <div className={cssClasses.profile}>
                {/*{this.props.userProfile}*/}
                <ProfileInfo userProfile={this.props.userProfile}/>
                <Posts {...this.props}/>
            </div>
        );
    };
};

export type ProfileContainerPropsType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & RouteComponentProps<IRouteProps>;
interface IRouteProps {
    userId: string;
}

const mapStateToProps = (state: RootStateType) => {
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