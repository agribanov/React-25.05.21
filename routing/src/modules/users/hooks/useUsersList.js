import { useEffect, useState } from 'react';
import { getUsersList } from '../services/usersService';

export default function useUsersList() {
    const [list, setList] = useState([]);

    useEffect(() => fetchUsers(), []);

    function fetchUsers() {
        getUsersList().then(setList);
    }

    return { list, fetchUsers };
}
