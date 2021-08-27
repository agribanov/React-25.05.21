import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from '../../common/hooks/useStyles';

function Header() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Link to="/dashboard" component={Button} color="inherit">
                    Home
                </Link>
                <Link to="/users" component={Button} color="inherit">
                    Users
                </Link>
                <Link to="/albums" component={Button} color="inherit">
                    Albums
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
