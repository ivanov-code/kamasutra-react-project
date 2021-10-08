import React from "react";
import cssClasses from "./friends-small-list.module.css";
import {FriendItem} from "./Friend-item/friend-item";

export const FriendsSmallList = (props) => {
    const friendsJSX = props.friendsList.map((friend) => <FriendItem key={friend.id} friend={friend}/>);

    return (
        <div className={cssClasses.friendsSmallList}>
            {friendsJSX}
        </div>
    );
};