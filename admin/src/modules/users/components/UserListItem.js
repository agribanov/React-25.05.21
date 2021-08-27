import { Button, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function UserListItem({ item }) {
    const { url } = useRouteMatch();

    return (
        <TableRow>
            <TableCell>{item.name}</TableCell>
            <TableCell align="right">{item.phone}</TableCell>
            <TableCell align="right">{item.email}</TableCell>
            <TableCell align="right">{item.website}</TableCell>
            <TableCell align="right">
                <Link to={url + '/' + item.id} component={Button}>
                    Edit
                </Link>
            </TableCell>
        </TableRow>
    );
}

export default UserListItem;
