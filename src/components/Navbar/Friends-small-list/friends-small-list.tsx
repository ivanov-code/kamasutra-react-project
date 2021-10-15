import React, {FC} from "react";
import cssClasses from "./friends-small-list.module.css";
import {FriendItem} from "./Friend-item/friend-item";
import {FriendsSmallListPropsType} from "./FriendsSmallListContainer/friends-small-list-container";

export const FriendsSmallList: FC<FriendsSmallListPropsType> = (props) => {
    const friendsJSX = props.friendsList.map((friend) => <FriendItem key={friend.id} friend={friend}/>);

    return (
        <div className={cssClasses.friendsSmallList}>
            {friendsJSX}
        </div>
    );
};