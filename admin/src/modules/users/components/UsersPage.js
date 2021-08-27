import { Typography } from '@material-ui/core';
import React from 'react';
import Loading from '../../common/components/Loading';
import useUsers from '../hooks/useUsers';
import UsersList from './UsersList';

function UsersPage() {
    const { users, isLoading } = useUsers();
    return (
        <>
            <Typography variant="h3">Users</Typography>
            {isLoading ? <Loading /> : <UsersList list={users} />}
        </>
    );
}

export default UsersPage;
