import { Box, Container } from '@material-ui/core';
import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import Albums from './modules/albums/components/Albums';
import Header from './modules/common/components/Header';
import NotFound from './modules/common/components/NotFound';
import Dashboard from './modules/dashboard/components/Dashboard';
import Users from './modules/users/components/Users';

function App() {
    return (
        <Container maxWidth="lg">
            <Router>
                <Header />
                <Box my={4}>
                    <Switch>
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/users" component={Users} />
                        <Route path="/albums" component={Albums} />
                        <Route path="/notfound" component={NotFound} />
                        <Route path="/" exact>
                            <Redirect to="/dashboard" />
                        </Route>
                        <Route path="*">
                            <Redirect to="/notfound" />
                        </Route>
                    </Switch>
                </Box>
            </Router>
        </Container>
    );
}

export default App;
