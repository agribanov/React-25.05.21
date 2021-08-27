import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import useLanguage from '../hooks/useLanguage';

function Navigation() {
    const { language, toggleLanguage } = useLanguage();

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
            <li>
                <button onClick={toggleLanguage}>
                    {language === 'en' ? 'Toggle Language' : 'Переключить язык'}
                </button>
            </li>
        </ul>
    );
}

export default Navigation;
