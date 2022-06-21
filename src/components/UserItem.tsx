import React, { JSXElementConstructor } from 'react';
import { IUser } from '../types/types';

interface UserItemProps{
    user: IUser;
    onClick: (user: IUser) => void;
}
const UserItem: JSXElementConstructor<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: '1px solid gray'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
        </div>    
    );
}

export default UserItem;