import { createContext, useState } from 'react';

import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import UsersListPage from './modules/users/pages/UsersListPage';
import TodoListPage from './modules/todos/pages/TodoListPage';

import AboutPage from './modules/about/page/AboutPage';
import HomePage from './modules/about/page/HomePage';
import NotFound from './modules/about/page/NotFound';
import Navigation from './modules/common/components/Navigation';
import UsersModule from './modules/users/UsersModule';
import LanguageProvider from './modules/common/providers/LanguageProvider';

function App() {
    return (
        <LanguageProvider>
            <Router>
                <Navigation />
                <div>
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/users">
                            <UsersModule />
                        </Route>
                        <Route path="/todos">
                            <TodoListPage />
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/notfound">
                            <NotFound />
                        </Route>
                        <Route path="*">
                            <Redirect to="/notfound" />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </LanguageProvider>
    );
}

export default App;
