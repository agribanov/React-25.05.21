import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <ul>
            <li>
                <NavLink to="/users" activeClassName="hello">
                    Users
                </NavLink>
            </li>
            <li>
                <NavLink to="/todos">Todos</NavLink>
            </li>
            <li>
                <NavLink to="/about">About</NavLink>
            </li>
        </ul>
    );
}

export default Navigation;
