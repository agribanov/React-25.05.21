import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router';
import { UserEditForm } from './UserForm';
import UsersPage from './UsersPage';

function Users() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={path} exact component={UsersPage} />
            <Route path={path + '/:userId'} component={UserEditForm} />
        </Switch>
    );
}

export default Users;
