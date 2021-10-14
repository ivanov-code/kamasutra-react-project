import React, {FC} from "react";
import cssClasses from "./friend-item.module.css";
import {IFriend} from "../../../../redux/navbar-reducer/navbar-reducer";

interface IFriendItem {
    friend: IFriend;
}

export const FriendItem: FC<IFriendItem> = (props) => {
    return (
        <div className={cssClasses.friendItem}>
            <img className={cssClasses.friendItem__avatar}
                 src="https://sun9-30.userapi.com/impg/vCKay1wmE5eI06ESsGQHLSb3c9RcxHSGlWFyAw/0hdzFWDyXJ0.jpg?size=2560x2048&quality=96&sign=4fee8b06194dbf407d44fe4d9b6d30b2&type=album"
                 alt="avatar"/>
            <span>{props.friend.name}</span>
        </div>
    );
};