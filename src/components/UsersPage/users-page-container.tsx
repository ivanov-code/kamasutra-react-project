import React, {Component} from "react";
import {UsersPage} from "./users-page";
import {connect} from "react-redux";
import {
    setCurrentPage, setIsLoading,
    setPagesAmount,
    setUsers,
    toggleFollow
} from "../../redux/users-reducer/users-reducer";
import axios from "axios";
import {IUsersResponseModel} from "../../types/response-models";
import {RootStateType} from "../../redux/redux-store";

export class UsersPageContainer extends React.Component<UsersPageContainerPropsType> {

    componentDidMount = (): void => {
        this.getAndSetUsers();
    }

    getAndSetUsers = (): void => {
        this.props.setIsLoading(true);
        axios.get<IUsersResponseModel>('https://social-network.samuraijs.com/api/1.0/users').then(({data}) => {
            const pagesAmount = Math.ceil(data.totalCount / 10);
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
            this.props.setPagesAmount(pagesAmount);
        });
    }

    setCurrentPage = (pageNumber: number): void => {
        this.props.setUsers([]);
        this.props.setIsLoading(true);
        axios.get<IUsersResponseModel>(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`).then(({data}) => {
            this.props.setCurrentPage(pageNumber);
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
        });
    }

    render(): JSX.Element {
        const pages = Array.from({length: this.props.pagesAmount}, (item, index) => index + 1);
        return (<UsersPage pages={pages}
                           setCurrentPage={this.setCurrentPage}
                           currentPageNumber={this.props.currentPageNumber}
                           users={this.props.users}
                           isLoading={this.props.isLoading}
            />);
    }
}

const mapStateToProps = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pagesAmount: state.usersPage.pagesAmount,
        currentPageNumber: state.usersPage.currentPageNumber,
        isLoading: state.usersPage.isLoading
    }
};

const mapDispatchToProps = {
        toggleFollow,
        setUsers,
        setPagesAmount,
        setCurrentPage,
        setIsLoading
};

type UsersPageContainerPropsType = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);