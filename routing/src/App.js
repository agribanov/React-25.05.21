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
import UserDetailsPage from './modules/users/pages/UserDetailsPage';
import UsersModule from './modules/users/UsersModule';

function App() {
    return (
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
    );
}

export default App;
