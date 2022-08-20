import React from "react";
import {UsersPage} from "./users-page";
import {connect} from "react-redux";
import {
    setCurrentPage, setIsLoading,
    setPagesAmount,
    setUsers,
    toggleFollow
} from "../../redux/users-reducer";
import axios from "axios";

export class UsersPageContainer extends React.Component {

    componentDidMount = () => {
        this.getAndSetUsers();
    }

    getAndSetUsers = () => {
        this.props.setIsLoading(true);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(({data}) => {
            const pagesAmount = Math.ceil(data.totalCount / 10);
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
            this.props.setPagesAmount(pagesAmount);
        });
    }

    setCurrentPage = (pageNumber) => {
        this.props.setUsers([]);
        this.props.setIsLoading(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}`).then(({data}) => {
            this.props.setCurrentPage(pageNumber);
            this.props.setIsLoading(false);
            this.props.setUsers(data.items);
        });
    }

    render() {
        const pages = Array.from({length: this.props.pagesAmount}, (item, index) => index + 1);
        return (<UsersPage pages={pages}
                           setCurrentPage={this.setCurrentPage}
                           currentPageNumber={this.props.currentPageNumber}
                           users={this.props.users}
                           isLoading={this.props.isLoading}
            />);
    }
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersPageContainer);