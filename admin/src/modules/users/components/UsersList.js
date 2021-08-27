import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import UserListItem from './UserListItem';

function UsersList({ list }) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Website</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list.map((user) => (
                        <UserListItem
                            component={UserListItem}
                            key={user.id}
                            item={user}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Phone</th>
        //             <th>Email</th>
        //             <th>Website</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {list.map((user) => (
        //             <UserListItem key={user.id} item={user} />
        //         ))}
        //     </tbody>
        // </table>
    );
}

export default UsersList;
