import React from 'react';
import useUsersList from '../hooks/useUsersList';
import UsersList from '../components/UsersList';

function UsersListPage() {
    const { list } = useUsersList();

    return (
        <div>
            <h2>Users List</h2>
            <UsersList list={list} />
        </div>
    );
}

export default UsersListPage;
