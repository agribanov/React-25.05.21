import React from 'react';
import { Link } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

function UsersList({ list }) {
    const { url } = useRouteMatch();

    return (
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                    <Link to={`${url}/${item.id}`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    );
}

export default UsersList;
