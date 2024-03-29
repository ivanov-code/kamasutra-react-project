import React from "react";
import defaultUserImg from '../../assets/images/user-default.jpeg';
import cssClasses from './styles.module.css'
import {Loader} from "../common/components/loader";
import {NavLink} from "react-router-dom";

export const UsersPage = (props) => {

    const setCurrentPage = (pageNumber) => {
        props.setCurrentPage(pageNumber);
    }

    return (
        <div>
            <div>
                {
                    props.pages.map((pageNumber, index) => {
                        return <span onClick={() => {
                            setCurrentPage(pageNumber)
                        }}
                                     key={index}
                                     className={props.currentPageNumber === pageNumber ? cssClasses.activeLink : null}>
                            {pageNumber}
                        </span>;
                    })
                }
            </div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <NavLink to={`/profile/${user.id}`}>
                                <img style={{cursor: 'pointer'}} src={user.photos.small || defaultUserImg} alt="avatar" width='50px'/>
                            </NavLink>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            <hr/>
                        </div>
                    )
                })
            }
            <Loader isLoading={props.isLoading}/>
        </div>
    );
}