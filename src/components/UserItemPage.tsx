
import React, { useEffect, useState } from 'react'
import { IUser } from '../types/types';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

type UserItemPageParams = {
    id: string;
};

const UserItemPage: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate();

    useEffect(() => {
        fetchUser();
    }, [])

    async function fetchUser() {
        try {
            console.log('загрузка...');
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            console.log(response.data);
            
            setUser(response.data)
        } catch (e) {
            alert(e);
        }
    }
    if(!user)
        return <h1>Нету ничего</h1>
  return (
    <div>
       <button onClick={() => navigate('/users')}>Back</button>
        <h1>Страница пользователя {user.name}</h1>
        <div>
            {user.email}
        </div>
        <div>
            {user.address.city} {user.address.street} {user.address.zipcode}
        </div>
    </div>
  )
}

export default UserItemPage;