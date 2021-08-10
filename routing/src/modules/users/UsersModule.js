import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import UserDetailsPage from './pages/UserDetailsPage';
import UsersListPage from './pages/UsersListPage';

function UsersModule() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={`${path}`} exact>
                <UsersListPage />
            </Route>
            <Route path={`${path}/:id`}>
                <UserDetailsPage />
            </Route>
            <Route path={`${path}/*`}>
                <Redirect to="/notfound" />
            </Route>
        </Switch>
    );
}

export default UsersModule;
