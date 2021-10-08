import React from "react";

export const UsersPage = (props) => {
    if (!props.users.length) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album',
                name: 'Vasiliy',
                lastName: 'Petrov',
                status: 'I am boss',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
            {
                id: 2,
                photoUrl: 'https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album',
                name: 'Vasiliy',
                lastName: 'Petrov',
                status: 'I am boss',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
            {
                id: 3,
                photoUrl: 'https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album',
                name: 'Vasiliy',
                lastName: 'Petrov',
                status: 'I am boss',
                location: {
                    country: 'Russia',
                    city: 'Moscow'
                }
            },
        ]);
    }

    return (
        <div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <img src={user.photoUrl} alt="avatar" width='50px'/>
                            <div>{user.name + ' ' + user.lastName}</div>
                            <div>{user.state}</div>
                            <div>{user.location.country + ' ' + user.location.city}</div>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
};